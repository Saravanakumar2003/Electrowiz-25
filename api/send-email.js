const nodemailer = require('nodemailer');
const QRCode = require('qrcode');
const puppeteer = require('puppeteer');
const cors = require('cors');
const express = require('express');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, name, participant } = req.body;

  try {
    // Ensure participant is a string
    const participantString = JSON.stringify(participant);

    // Generate QR code
    const qrCodeDataUrl = await QRCode.toDataURL(participantString);

    // Generate ID card image using Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'], // Necessary for Vercel
    });
    const page = await browser.newPage();
    await page.setContent(`
      <html>
        <head>
          <style>
            body {
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background: #f0f0f0;
            }
            .id-card {
              width: 300px;
              padding: 20px;
              border: 1px solid #ccc;
              border-radius: 10px;
              background-color: #f9f9f9;
              text-align: center;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .logo {
              width: 80px;
              height: auto;
              margin-bottom: 5px;
            }
            .participant-photo {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              margin: 10px 0;
              border: 2px solid #ccc;
            }
            .details {
              text-align: left;
              margin-top: 10px;
            }
            .details p {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <div class="id-card">
            <img src="data:image/png;base64,${participant.passportPic}" alt="Participant" class="participant-photo" />
            <h2>Velammal Engineering College</h2>
            <h3>Electrowhiz 2k25 ID Card</h3>
            <div class="details">
              <p><strong>Name:</strong> ${participant.name}</p>
              <p><strong>College:</strong> ${participant.collegeName}</p>
              <p><strong>Food Preference:</strong> ${participant.food}</p>
            </div>
            <img src="${qrCodeDataUrl}" alt="QR Code" />
          </div>
        </body>
      </html>
    `);
    const idCardDataUrl = await page.screenshot({ encoding: 'base64' });
    await browser.close();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Registration Confirmation - Electrowhiz 2k25',
      text: `Dear ${name},\n\nThank you for registering for the symposium. Your registration is successful.\n\nBest regards,\nElectrowhiz 2k25 Team`,
      attachments: [
        {
          filename: 'IDCard.png',
          content: idCardDataUrl,
          encoding: 'base64',
        },
        {
          filename: 'QRCode.png',
          content: qrCodeDataUrl.split('base64,')[1],
          encoding: 'base64',
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Confirmation email sent');
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    res.status(500).send('Error sending confirmation email');
  }
});

module.exports = app;