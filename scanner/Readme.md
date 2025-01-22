# Electrowiz 2025 QR Code Scanner
---

## Overview
The Electrowhiz 2025 QR Code Scanner is a powerful tool designed for use at Electrowiz 2025, the ECE Symposium hosted at Velammal Engineering College. This application streamlines the registration and attendance process with QR code scanning capabilities, integrated Google Sheets data, and automatic attendance marking.

---

## Features
- **Webcam-based Scanning**: Scan QR codes effortlessly using your laptop’s webcam.
- **User Details Display**: See attendee details immediately after scanning.
- **Google Sheets Integration**: Pull user data dynamically from a public Google Sheets URL.
- **Automatic Attendance Marking**: Automatically update attendance in real-time (requires API and edit permissions).
- **Event Validation**: Supports multiple events and validates user registrations accordingly.

---

## Requirements
- **Operating System**: Windows 10 or later
- **Camera**: Laptop or external webcam
- **Google Sheets**: Public URL with API access enabled

---

## QR Code Structure
The QR code must be in the following JSON format for successful scanning:

```json
{
  "food": "veg",
  "department": "Computer Science",
  "events": ["Paper presentation", "Workshop"],
  "degree": "Bachelor of Technology",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "collegeName": "XYZ University",
  "passportPic": "https://example.com/passport.jpg"
}
```
This structure is essential for the application to display user details correctly. Since all the fields are mandatory, the QR code must contain all the specified keys. 

## Building the Application

1. Use pyinstaller to build the application.
1. You need the dll files for decoding the QR code. You can find them in the `dll_files` folder.
2. Run the following command to build the application:

```bash
pyinstaller --noconfirm --onefile --windowed --icon "{location_to_icon}" --add-data "(location_to_credentials);." --add-binary "{location_to_libconv.dll};." --add-binary "{location_to_libzbar-64.dll};."  "{location_to_main.py}"
```

