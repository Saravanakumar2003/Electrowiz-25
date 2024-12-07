const brevo = require('@sendinblue/client');
const QRCode = require('qrcode');

// Brevo API client setup
const apiKey = process.env.BREVO_API_KEY; // API key stored in environment variable
const client = brevo.ApiClient.instance;
client.authentications['api-key'].apiKey = apiKey;

const transactionalEmailsApi = new brevo.TransactionalEmailsApi();

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, name, participant } = req.body;

  try {
    // Ensure participant is a string
    const participantString = JSON.stringify(participant);

    // Generate QR code
    const qrCodeDataUrl = await QRCode.toDataURL(participantString);

    // Prepare the HTML content for the email
    const htmlContent = ` 
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
    `;

    // Send email with Brevo
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = 'Registration Confirmation - Electrowhiz 2k25';
    sendSmtpEmail.htmlContent = htmlContent;
    sendSmtpEmail.sender = { email: 'saravanakumar.testmail@gmail.com', name: 'Electrowhiz2K25 Team' };
    sendSmtpEmail.to = [{ email }];
    
    // Attachments: ID Card and QR Code images
    sendSmtpEmail.attachment = [
      {
        name: 'IDCard.png',
        content: qrCodeDataUrl.split('base64,')[1], // Base64-encoded image content for ID Card
        contentType: 'image/png',
      },
      {
        name: 'QRCode.png',
        content: qrCodeDataUrl.split('base64,')[1], // Base64-encoded QR Code image content
        contentType: 'image/png',
      },
    ];

    // Send the email via Brevo
    const result = await transactionalEmailsApi.sendTransacEmail(sendSmtpEmail);
    console.log('Email sent successfully:', result);
    res.status(200).send('Confirmation email sent');
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    res.status(500).send('Error sending confirmation email');
  }
};
