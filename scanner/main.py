from pyzbar.pyzbar import decode
import cv2, sys, os
import numpy as np
import json
from tkinter import Tk, Label, StringVar, PhotoImage
from tkinter import ttk
from PIL import Image, ImageTk
import requests
from io import BytesIO
import threading
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import logging

# Configure logging
logging.basicConfig(filename='app.log', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

class EventRegistrationApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Electrowiz'25 Registration Desk")
        self.root.geometry("1920x1080")
        self.camera_active = False
        self.sheet = None
        self.user_details = {
            "name": StringVar(value="Name: "),
            "college": StringVar(value="College: "),
            "event": StringVar(value="Event: "),
            "food": StringVar(value="Food: "),
            "status": StringVar(value="Status: "),
            "photo": None,
        }
        self.sheet_url_var = StringVar()
        self.current_event_var = StringVar(root)
        self.current_event_var.set("Select Event")
        self.events = ["Entry", "Idea ignition", "Imaginarium", "Quiztronics", "Byte and breakthrough", "Infinity squad", "Linked up", "Melody madness", "Pixel perfect", "Mystery matters", "Workshop"]
        self.create_widgets()

    def create_widgets(self):
        self.configure_styles()
        self.create_video_frame()
        self.create_title_label()
        self.create_button_frame()
        self.create_event_dropdown()
        self.create_details_frame()
        self.create_sheet_url_entry()
        self.create_confirm_change_buttons()
        self.create_scan_exit_buttons()

    def configure_styles(self):
        style = ttk.Style()
        style.configure("TFrame", background="#f0f0f0")
        style.configure("TOptionMenu", font=("Arial", 24, "bold"))
        style.configure("TLabel", background="#f0f0f0", font=("Arial", 14))
        style.configure("TButton", font=("Arial", 12), padding=10)
        style.configure("TEntry", font=("Arial", 12), padding=5)
        
    def create_title_label(self):
        title = ttk.Label(self.root, text="Event Registration Desk", font=("Arial", 24, "bold"), foreground="#5D4037")
        title.grid(row=0, column=0, columnspan=3, pady=10)
        
    def create_sheet_url_entry(self):
        title3 = ttk.Label(self.root, text="Step 1: ", font=("Arial", 18, "bold"), foreground="#5D4037")
        title3.grid(row=1, column=0, pady=10)
        self.sheet_url_entry = ttk.Entry(self.root, textvariable=self.sheet_url_var, width=50)
        self.sheet_url_entry.grid(row=1, column=1, padx=10, pady=10, sticky="nsew")

    def create_confirm_change_buttons(self):
        self.confirm_button = ttk.Button(self.root, text="Confirm URL", command=self.confirm_url)
        self.confirm_button.grid(row=1, column=2, padx=10, pady=10)
        self.change_button = ttk.Button(self.root, text="Change URL", command=self.change_url, state="disabled")
        self.change_button.grid(row=1, column=3, padx=10, pady=10)

    def create_event_dropdown(self):
        title4 = ttk.Label(self.root, text="Step 2: ", font=("Arial", 18, "bold"), foreground="#5D4037")
        title4.grid(row=2, column=0, pady=10)
        event_dropdown = ttk.OptionMenu(self.root, self.current_event_var, *self.events)
        event_dropdown.grid(row=2, column=1,columnspan=2, padx=10, pady=10, sticky="nsew")    
            
    def create_scan_exit_buttons(self):
        title2 = ttk.Label(self.root, text="Step 3:", font=("Arial", 18, "bold"), foreground="#5D4037")
        title2.grid(row=3, column=0, pady=10)
        ttk.Button(self.button_frame, text="Start Scan", command=lambda: threading.Thread(target=self.scan_qr_code).start()).grid(row=3, column=1, padx=10, pady=10)
        ttk.Button(self.button_frame, text="Exit", command=self.root.quit).grid(row=3, column=2, padx=10, pady=10)
    
    def create_button_frame(self):
        self.button_frame = ttk.Frame(self.root, style="TFrame")
        self.button_frame.grid(row=3, column=1, padx=10, pady=10, sticky="nsew")
            

    def create_video_frame(self):
        video_frame = ttk.Frame(self.root, width=640, height=480, style="TFrame")
        video_frame.grid(row=4, column=1, padx=10, pady=10, sticky="nsew")
        self.video_label = ttk.Label(video_frame)
        self.video_label.pack()

    def create_details_frame(self):
        details_frame = ttk.Frame(self.root, padding=20, width=640, height=480,style="TFrame")
        details_frame.grid(row=4, column=3, padx=10, pady=10, sticky="nsew")
        title = ttk.Label(details_frame, text="User Details", font=("Arial", 18, "bold"), foreground="#3E2723")
        title.pack(pady=10)

        # Display user's photo
        self.user_details["photo_label"] = Label(details_frame, background="gray", width=200, height=200)
        placeholder_image = PhotoImage(width=200, height=200)
        self.user_details["photo_label"].config(image=placeholder_image)
        self.user_details["photo_label"].pack(pady=10)

        text_frame = ttk.Frame(details_frame, style="TFrame")
        text_frame.pack(pady=10)
        ttk.Label(text_frame, textvariable=self.user_details["name"]).pack(pady=5, anchor="w")
        ttk.Label(text_frame, textvariable=self.user_details["college"]).pack(pady=5, anchor="w")
        ttk.Label(text_frame, textvariable=self.user_details["event"]).pack(pady=5, anchor="w")
        ttk.Label(text_frame, textvariable=self.user_details["food"]).pack(pady=5, anchor="w")
        ttk.Label(text_frame, textvariable=self.user_details["status"], foreground="blue").pack(pady=5, anchor="w")

    def initialize_google_sheet(self, sheet_url):
        logging.debug(f"Initializing Google Sheet with URL: {sheet_url}")
        
        # Determine the correct path to the JSON file
        if getattr(sys, 'frozen', False):
            # The application is bundled with PyInstaller
            base_path = sys._MEIPASS
        else:
            # The application is in development mode
            base_path = os.path.dirname(os.path.abspath(__file__))
        
        credentials_path = os.path.join(base_path, 'credentials.json')
        
        scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
        creds = ServiceAccountCredentials.from_json_keyfile_name(credentials_path, scope)
        client = gspread.authorize(creds)
        self.sheet = client.open_by_url(sheet_url).sheet1
        logging.debug("Google Sheet initialized successfully")

    def validate_qr_data(self, qr_data):
        try:
            data = json.loads(qr_data)
            records = self.sheet.get_all_records()
            current_event = self.current_event_var.get()

            for record in records:
                if record.get("Email") == data["email"] and record.get("Name") == data["name"]:
                    if "Events" in record:
                        registered_events = record["Events"].split(", ")
                        if current_event in registered_events:
                            present_cell = self.sheet.find("Attendance")
                            if present_cell:
                                try:
                                    row_index = records.index(record) + 2 
                                    self.sheet.update_cell(row_index, present_cell.col, "Yes")
                                except gspread.exceptions.APIError as e:
                                    logging.error(f"APIError: {e}")
                                    self.user_details["status"].set("Status: Permission Denied")
                                    return

                                self.user_details["name"].set(f"Name: {data['name']}")
                                self.user_details["college"].set(f"College: {data['collegeName']}")
                                self.user_details["event"].set(f"Event: {', '.join(data['events'])}")
                                self.user_details["food"].set(f"Food: {data['food']}")
                                self.user_details["status"].set("Status: Attendance Marked")

                                try:
                                    response = requests.get(data["passportPic"])
                                    response.raise_for_status()
                                    passport_image = Image.open(BytesIO(response.content))
                                    passport_image = passport_image.resize((150, 150))

                                    self.user_details["photo"] = ImageTk.PhotoImage(passport_image)
                                    self.user_details["photo_label"].config(image=self.user_details["photo"])
                                except requests.exceptions.RequestException as e:
                                    logging.error(f"Error fetching image: {e}")
                                    self.user_details["status"].set("Status: Image Load Failed")
                            else:
                                self.user_details["status"].set("Status: 'Present' Column Not Found")
                        else:
                            self.user_details["status"].set("Status: User Found but Invalid Event")
                    else:
                        self.user_details["status"].set("Status: 'Events' Key Not Found")
                    return
            self.user_details["status"].set("Status: Invalid User")
        except json.JSONDecodeError as e:
            logging.error(f"Error decoding JSON: {e}")
            self.user_details["status"].set("Status: Invalid QR Code")

    def scan_qr_code(self):
        self.camera_active = True
        cap = cv2.VideoCapture(0)

        def update_frame():
            ret, frame = cap.read()
            if not ret:
                logging.error("Failed to grab frame")
                return

            detected_qr_codes = decode(frame)
            for qr in detected_qr_codes:
                qr_data = qr.data.decode("utf-8")
                logging.debug(f"Scanned QR Code: {qr_data}")
                self.validate_qr_data(qr_data)

                # Draw a green rectangle around the detected QR code
                points = qr.polygon
                if len(points) == 4:
                    pts = np.array(points, np.int32)
                    pts = pts.reshape((-1, 1, 2))
                    cv2.polylines(frame, [pts], isClosed=True, color=(0, 255, 0), thickness=2)

                stop_camera()
                break

            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            frame_image = ImageTk.PhotoImage(image=Image.fromarray(frame_rgb))
            self.video_label.config(image=frame_image) 
            self.video_label.image = frame_image

            if self.camera_active:
                self.video_label.after(10, update_frame)

        update_frame()

        def stop_camera(self):
            self.camera_active = False
            cap.release()
            cv2.destroyAllWindows()

    def confirm_url(self):
        logging.debug("Confirm URL button clicked")
        sheet_url = self.sheet_url_var.get()
        logging.debug(f"Sheet URL: {sheet_url}")
        self.initialize_google_sheet(sheet_url)
        self.sheet_url_entry.config(state="disabled")
        self.confirm_button.config(state="disabled")
        self.change_button.config(state="normal")

    def change_url(self):
        self.sheet_url_entry.config(state="normal")
        self.confirm_button.config(state="normal")
        self.change_button.config(state="disabled")
    
if __name__ == "__main__":
    root = Tk()
    app = EventRegistrationApp(root)
    root.mainloop()