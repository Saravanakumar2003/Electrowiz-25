const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const QRCode = require("qrcode");
const puppeteer = require("puppeteer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { email, name, participant } = req.body;

  try {
    // Ensure participant is a string
    const participantString = JSON.stringify(participant);

    // Generate QR code
    const qrCodeDataUrl = await QRCode.toDataURL(participantString);

    // Generate ID card image using Puppeteer
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
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
              font-family: Arial, sans-serif;
  
              .id-card {
                width: 300px;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 10px;
                background-color: #f9f9f9;
                text-align: center;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                margin-top: 20px; /* Add top margin */
              }
              
              .logo {
                width: 80px;
                height: auto;
                margin-bottom:5px;
              }
              
              .id-card h2 {
                font-size: 18px;
                margin-bottom: 5px;
              }
              
              .id-card h3 {
                font-size: 16px;
                margin-bottom: 10px;
              }
              
              .id-card p {
                margin: 5px 0;
              }
              
              .id-card ul {
                list-style-type: none;
                padding: 0;
                margin: 5px 0;
              }
              
              .id-card li {
                margin: 3px 0;
              }
              
              .participant-photo {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin: 5px 0;
              }
          </style>
        </head>
        <body>
        <div>
        <div className="id-card" ref={cardRef}>
        <h2>Velammal Engineering College</h2>
        <h3>Electrowhiz 2k25 ID Card</h3>
        <img src={participant.passportPic} alt="Participant" className="participant-photo" />
        <p><strong>Name:</strong> {participant.name}</p>
        <p><strong>College:</strong> {participant.collegeName}</p>
        <p><strong>Food Preference:</strong> {participant.food}</p>
        <QRCodeCanvas value={JSON.stringify(participant)} size={150} />
        <br />
      </div>
      <button onClick={handleDownload}>Download ID Card</button>
    </div>
        </body>
      </html>
    `);
    const idCardDataUrl = await page.screenshot({ encoding: "base64" });
    await browser.close();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Registration Confirmation - Electrowhiz 2k25",
      text: `Dear ${name},\n\nThank you for registering for the symposium. Your registration is successful.\n\nBest regards,\nElectrowhiz 2k25 Team`,
      attachments: [
        {
          filename: "IDCard.png",
          content: idCardDataUrl,
          encoding: "base64",
        },
        {
          filename: "QRCode.png",
          content: qrCodeDataUrl.split("base64,")[1],
          encoding: "base64",
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Confirmation email sent");
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    res.status(500).send("Error sending confirmation email");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
