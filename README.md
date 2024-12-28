# Electrowiz'25

Welcome to the Electrowiz'25 project! This project is a web application for the Electrowiz'25 event, providing information about the event, registration, and more.

## Table of Contents

- [Electrowiz'25](#electrowiz25)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [This project automates several key processes to save time and reduce manual effort:](#this-project-automates-several-key-processes-to-save-time-and-reduce-manual-effort)
    - [Technologies Used](#technologies-used)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)



## Getting Started

### This project automates several key processes to save time and reduce manual effort:

- **Automated Registration:** Participants can register online, eliminating the need for manual data entry.
- **Automated Payments:** Payments are processed automatically & verified using Razorpay, ensuring quick and secure transactions.
- **QR Code Generation:** Each participant receives a QR code along with their ID card. This QR code can be scanned at the registration desk.
- **Automated Attendance:** Scanning the QR code at the registration desk automatically marks the participant as present in a Google Sheet, removing the need for manual verification.

By automating these steps, the project significantly reduces the time and effort required for registration, payment processing, and attendance tracking, making the entire process more efficient.

### Technologies Used

- React: A JavaScript library for building user interfaces.
- Firebase: Used for database.
- Razorpay: For handling payments.
- Cloudinary: For image uploads and management.
- FullCalendar: For displaying event calendars.
- TailwindCSS: A utility-first CSS framework for styling.
- Axios: For making HTTP requests.
- Express: A web application framework for Node.js (Local Testing).
- Google APIs: For integrating with Google Sheets.
- Web3Forms: For handling form submissions.
- Sendinblue: For sending confirmation emails.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/electrowiz25.git
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


## Project Structure
.
├── api/
│   ├── payment.js
│   └── server.js
├── public/
│   ├── img/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   ├── css/
│   ├── js/
│   ├── pages/
│   ├── utils/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js


## Envirnoment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id
REACT_APP_RAZORPAY_KEY_SECRET=your_razorpay_key_secret
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset
REACT_APP_CLIENT_ID=your_google_client_id
REACT_APP_CLIENT_SECRET=your_google_client_secret
REACT_APP_REFRESH_TOKEN=your_google_refresh_token
REACT_APP_SHEET=your_google_sheet_id
REACT_APP_BREVO_API_KEY=your_brevo_api_key
REACT_APP_FORM=your_web3forms_access_key
```
