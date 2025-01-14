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
    - [This project automates several key processes to save time and reduce manual effort:](#this-project-automates-several-key-processes-to-save-time-and-reduce-manual-effort)
    - [Technologies Used](#technologies-used)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Google Sheets Integration](#google-sheets-integration)
  - [Scanner Application](#scanner-application)
  - [Acknowledgements](#acknowledgements)



## Getting Started

### This project automates several key processes to save time and reduce manual effort:

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

![Project Flow](public\img\readme\flow.png)

</div>


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

