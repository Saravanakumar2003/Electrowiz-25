// utils/emailService.js
import QRCode from 'qrcode';
import axios from 'axios';
import { toast } from 'react-toastify';

export const generateQRCodeURL = async (participant) => {
  const qrCodeURL = await QRCode.toDataURL(JSON.stringify(participant));
  return qrCodeURL;
};

export const dataURLtoFile = (dataurl, filename) => {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

export const sendConfirmationEmail = async (email, name, formData) => {
  try {
    const qrCodeURL = await generateQRCodeURL(formData);
    const qrCodeBase64 = qrCodeURL.split(',')[1]; 

    const data = {
      sender: {
        name: "Electrowiz'25 Team",
        email: "team@electrowiz.info"
      },
      to: [
        {
          email: email,
          name: name
        }
      ],
      subject: "Registration Confirmation - Electrowiz'25",
      htmlContent: `
        <h1>Registration Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Thank you for registering for the Electrowiz'25. Here are your details:</p>
        <ul>
          <li>Name: ${formData.name}</li>
          <li>Email: ${formData.email}</li>
          <li>Phone: ${formData.phone}</li>
          <li>Gender: ${formData.gender}</li>
          <li>Food Preference: ${formData.food}</li>
          <li>College Name: ${formData.collegeName}</li>
          <li>Degree: ${formData.degree}</li>
          <li>Department: ${formData.department}</li>
          <li>Year of Study: ${formData.yearOfStudy}</li>
          <li>Events Registered: ${formData.events.join(', ')}</li>
        </ul>
        <p>If you have any changes to make or have any discrepancies, please contact us to this <a href="mailto:contact@electrowiz.info">email address</a>.</p>
        <p>We look forward to seeing you at the event!</p>
        <br>

        <strong>Important Instructions:</strong>
        <ul>
          <li>Please carry a valid college ID card.</li>
          <li>Make sure to reach the venue on 9 AM.</li>
          <li>Carry a copy of this email (soft or hard copy).</li>
        </ul>

        <p>For any queries, please contact us at
          
        </p>

        <p>Best regards,</p>
        <p>Electrowiz'25 Team</p>
        <br>
        <p><strong>Note:</strong> Attached is your QR Code for the event.</p>
      `,
      attachment: [
        {
          content: qrCodeBase64,
          name: 'qrcode.png',
          type: 'image/png'
        }
      ]
    };

    const headers = {
      'accept': 'application/json',
      'api-key': process.env.REACT_APP_BREVO_API_KEY,
      'content-type': 'application/json'
    };

    await axios.post('https://api.brevo.com/v3/smtp/email', data, { headers });
    toast.success('Confirmation email sent successfully!');
  } catch (error) {
    toast.error('Error sending confirmation email. Please contact the team.');
    console.error(error);
  }
};
