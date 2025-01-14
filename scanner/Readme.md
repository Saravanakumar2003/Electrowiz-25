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
  "phone": "+1 (123) 456-7890",
  "department": "Computer Science",
  "events": ["Paper presentation", "Workshop"],
  "paymentReceipt": "https://example.com/payment-receipt.jpg",
  "degree": "Bachelor of Technology",
  "name": "John Doe",
  "gender": "Male",
  "paymentQRCode": "https://example.com/payment-qr-code.jpg",
  "email": "johndoe@example.com",
  "signaturePic": "https://example.com/signature.jpg",
  "collegeName": "XYZ University",
  "yearOfStudy": "4",
  "passportPic": "https://example.com/passport.jpg"
}
``