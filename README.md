# Electrowiz'25

Welcome to the Electrowiz'25 project! This project is a web application for the Electrowiz'25 event, providing information about the event, registration, and more.

## Problem Statement

The Electrowiz'25 event is a large-scale event (with 500+ participants)that requires a lot of manual effort to manage. Participants need to register, make payments, and have their attendance verified, all of which are currently done manually. This process is time-consuming and prone to errors, making it inefficient and unreliable.

To address these challenges, we have developed a web application that automates several key processes, including registration, payments, and attendance tracking. By automating these steps, the project significantly reduces the time and effort required for managing the event, making the entire process more efficient and reliable.

## Table of Contents

- [Electrowiz'25](#electrowiz25)
  - [Problem Statement](#problem-statement)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Test the site](#test-the-site)
    - [View the Data](#view-the-data)
    - [Automation](#automation)
    - [Technologies Used](#technologies-used)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Google Sheets Integration](#google-sheets-integration)
  - [Scanner Application](#scanner-application)
  - [Acknowledgements](#acknowledgements)
  - [Conclusion](#conclusion)

---
## Demo Video

https://github.com/user-attachments/assets/080d1158-dbf3-44d7-9be7-ed3bd8ee74ff

---

## Getting Started
 
 ### Test the site

You can test the site by visiting the [Electrowiz'25](https://electrowiz.vercel.app/) website. The site provides information about the event, allows participants to register, make payments, and view the event calendar.

To test the registration process, follow these steps:
- Click on the "Register" button on the home page.
- Fill in the registration form with your details.
- Click Pay Now to proceed to the payment page. This is dummy payment and you can use the following details:
  - Select UPI as the payment method.
  - Enter the UPI ID as `test@ybl`.
  - Click on the "Pay" button.
  - You will be redirected to the ID-Card page once the payment is successful.
  - You can download the ID card and view the QR code.
  - You will also receive a confirmation email with all the details.

### View the Data

The project uses Google Sheets to store participant data and mark attendance. The Google Sheet is updated automatically when a participant registers or scans their QR code. You can view the Google Sheet [here](https://docs.google.com/spreadsheets/d/1SiAbKXZhYryfzCWTpNTucB1PhESLCNeSoHieDCvY41Y/edit?gid=0#gid=0). 

### Automation
This project automates several key processes to save time and reduce manual effort:

- **Automated Registration:** Participants can register online, eliminating the need for manual data entry.
- **Automated Payments:** Payments are processed automatically & verified using Razorpay, ensuring quick and secure transactions.
- **QR Code Generation:** Each participant receives a QR code along with their ID card. This QR code can be scanned at the registration desk.
- **Automated Attendance:** Scanning the QR code at the registration desk automatically marks the participant as present in a Google Sheet, removing the need for manual verification.
- **Confirmation Emails:** Participants receive a confirmation email upon successful registration, providing them with all the necessary details.
- **Event Calendar:** The event calendar is displayed using FullCalendar, allowing participants to view the schedule and register for specific events. 

By automating these steps, the project significantly reduces the time and effort required for registration, payment processing, and attendance tracking, making the entire process more efficient.

### Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Firebase**: Used for database.
- **Razorpay**: For handling payments.
- **Cloudinary**: For image uploads and management.
- **FullCalendar**: For displaying event calendars.
- **TailwindCSS**: A utility-first CSS framework for styling.
- **Axios**: For making HTTP requests.
- **Express**: A web application framework for Node.js (Local Testing).
- **Google APIs**: For integrating with Google Sheets.
- **Web3Forms**: For handling form submissions.
- **Sendinblue**: For sending confirmation emails.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Saravanakumar2003/Electrowiz-25.git
   cd electrowiz25
    ```
2. Install the required dependencies:
3. ```sh
   npm install
   ```
4. Start the development server:
   ```sh
    npm run start
    ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
6. You're all set! 🚀

## Deployment

The project is deployed on **Vercel**, a cloud platform for static sites and Serverless Functions. The deployment process is automated using GitHub Actions, which triggers a new deployment whenever changes are pushed to the `main` branch.

We have also used vercel analytics to track the user interactions and the performance of the website.

The project is live at [electrowiz.vercel.app](electrowiz.vercel.app).

## Project Flow

The project consists of several key components, each of which plays a crucial role in automating the event management process:

<div style="text-align: center;">

![Project Flow](https://i.postimg.cc/rpfNYqJL/flow.png)

</div>

## Security Features

The project includes several security features to ensure the safety and privacy of participant data:

- **Input Validation:** User inputs are sanitized and validated to prevent injection attacks.
- **OAuth 2.0**: OAuth 2.0 is used for secure authentication and authorization when accessing Google Sheets.
- **Environment Variables**: Sensitive information such as API keys and secrets are stored in environment variables to prevent exposure in the codebase.
- **HTTPS**: The application uses HTTPS to ensure secure communication between the client and server.
- **Data Encryption**: Sensitive data such as payment information is encrypted during transmission to ensure it is secure.

The site undergoes regular security audits and testing to identify and address any vulnerabilities that may arise.

## Testing and Performance

The project has undergone extensive testing to ensure it meets the highest standards of quality and performance. The site is tested on various devices and browsers to ensure compatibility and responsiveness. Performance testing is conducted to optimize loading times and ensure a smooth user experience.

The project is continuously monitored and updated to address any issues that may arise and to ensure it remains secure and performant.

## Design Files

The project design files are available in the `design` directory. The design files include the Figma prototype, UI/UX designs, and other design assets used in the project. The design files are available in the [Electrowiz Design](desgin\Electrowiz25.pdf) directory.

The designs are created using Figma, a collaborative interface design tool. Figma allows designers to create, test, and share designs with team members and stakeholders, making it easy to collaborate and iterate on designs. 

<strong>Note:</strong> The design files are for reference purposes only and may not reflect the final implementation of the project. 

## Electrowiz Scanner

The Electrowiz Scanner is a desktop application that allows event organizers to scan participants' QR codes and mark their attendance. The scanner app is built using python and OpenCV, and it uses the webcam to scan QR codes. Once a QR code is scanned, the app automatically marks the participant as present in a Google Sheet, eliminating the need for manual verification.

To use the Electrowiz Scanner, follow these steps: 

1. Navigate to the `scanner` directory:
   ```sh
   cd Electrowiz_Scanner
   ```
2. Install the required dependencies:
   ```sh
   pip install -r requirements.txt
   ```
3. Get your Google Sheets API credentials and save them as `credentials.json` in the `scanner` directory.
4. Run the scanner app:
   ```sh
   python main.py
   ```
5. You're all set! 🚀


For a detailed guide on how to use the Electrowiz Scanner, refer to the [Scanner Documentation](scanner/Readme.md)


### Google Sheets Integration

The project uses Google Sheets to store participant data and mark attendance. To integrate with Google Sheets, follow these steps:

1. Create a new Google Sheet and add the following columns:
   - Name
   - Email
   - Phone
   - Attendance
 - Save the Google Sheet and share it with the email address in your `credentials.json` file. (With edit permissions)
 - Copy the Google Sheet URL and give that in the scanner app. 
 - You're all set! 🚀

## Scanner Application

The application is built using pyinstaller and the executable file is generated. It is avalaible in the github release section.

Download the latest release from the [Releases](https://github.com/Saravanakumar2003/Electrowiz-25/releases/tag/v1.0.0) section.

## Acknowledgements

We would like to thank the following individuals and organizations for their contributions to this project:

- [Velammal Engineering College](https://www.velammal.edu.in/) for hosting Electrowiz'25 and providing the opportunity to develop this project.
- [Electrowiz'25 Team](https://www.electrowiz.info/credits/) for their support throughout the project.
- [Codrops](https://tympanus.net/codrops/) for the inspiration and resources.

## Conclusion

The Electrowiz'25 project is a comprehensive web application that automates several key processes involved in event management. By automating registration, payment processing, and attendance tracking, the project significantly reduces the time and effort required to manage the event, making the entire process more efficient and reliable.

The project was a grand success and received positive feedback from participants and organizers. The project team worked tirelessly to ensure the project met the highest standards of quality and performance, and the results speak for themselves.

We are proud of what we have accomplished with the Electrowiz'25 project and look forward to future opportunities to apply our skills and expertise to create innovative solutions that make a difference.
