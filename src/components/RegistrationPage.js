import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import axios from 'axios';
import QRCode from 'qrcode';
import SibApiV3Sdk from '@sendinblue/client';
import '../css/RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    food: '',
    collegeName: '',
    degree: '',
    department: '',
    yearOfStudy: '',
    events: [],
    passportPic: '',
    signaturePic: '',
    paymentReceipt: ''
  });

  const [uploadingPassport, setUploadingPassport] = useState(false);
  const [uploadingSignature, setUploadingSignature] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;
    if (type === 'select-multiple') {
      const values = Array.from(selectedOptions, option => option.value);
      setFormData({
        ...formData,
        [name]: values
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

    if (type === 'passportPic') {
      setUploadingPassport(true);
    } else {
      setUploadingSignature(true);
    }

    fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        const url = data.secure_url;
        setFormData(prevFormData => ({
          ...prevFormData,
          [type]: url
        }));
        if (type === 'passportPic') {
          setUploadingPassport(false);
        } else {
          setUploadingSignature(false);
        }
      })
      .catch(err => {
        console.error('Upload failed:', err);
        if (type === 'passportPic') {
          setUploadingPassport(false);
        } else {
          setUploadingSignature(false);
        }
      });
  };

  const getAccessToken = async () => {
    try {
      const response = await axios.post('https://oauth2.googleapis.com/token', {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        refresh_token: process.env.REACT_APP_REFRESH_TOKEN,
        grant_type: 'refresh_token'
      });
      return response.data.access_token;
    } catch (error) {
      console.error('Error refreshing access token:', error);
      throw error;
    }
  };

  const generateQRCodeURL = async (participant) => {
    const qrCodeURL = await QRCode.toDataURL(JSON.stringify(participant));
    return qrCodeURL;
  };

  const sendConfirmationEmail = async (email, name, participant) => {
    try {
      // Generate the QR code URL
      const qrCodeURL = await generateQRCodeURL(participant);

      // Convert the QR code URL to a base64 string
      const qrCodeResponse = await axios.get(qrCodeURL, { responseType: 'blob' });
      const reader = new FileReader();
      reader.readAsDataURL(qrCodeResponse.data);
      const qrCodeBase64 = await new Promise((resolve, reject) => {
        reader.onloadend = () => {
          resolve(reader.result.split(',')[1]); // Remove the prefix (data:image/png;base64,)
        };
        reader.onerror = reject;
      });

      // Configure Sendinblue API client
      const defaultClient = new SibApiV3Sdk.ApiClient();
      defaultClient.authentications['api-key'].apiKey = process.env.REACT_APP_BREVO_API_KEY;

      const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

      sendSmtpEmail.to = [{ email, name }];
      sendSmtpEmail.subject = 'Symposium Registration Confirmation - ElectroWhiz2K25';
      sendSmtpEmail.htmlContent = `
        <h1>Dear ${name},</h1>
        <p>Thank you for registering for the symposium! Your participation details:</p>
        <ul>
          <li>Name: ${name}</li>
          <li>Event(s): ${participant.events.join(', ')}</li>
          <li>Food Preference: ${participant.food}</li>
          <li>College: ${participant.collegeName}</li>
        </ul>
        <strong>Kindly, read the following instructions:</strong>
        <p>1. Make sure to carry your ID card and this email to the event.</p>
        <p>2. The event will start at 9:00 AM on 15th October 2025.</p>
        <p>3. The venue is Velammal Engineering College, Chennai.</p>
        <p>4. If you have any questions, please contact us at 
          <a href="mailto:electrowhiz2k25@gmail.com"></a>
        </p>
        <p>We look forward to seeing you at the event!</p>
        <p>Best regards,<br>ElectroWhiz2K25 Team</p>

        <p></p><strong>Note:</strong> If you lose this email, you cannot participate in the event. Please keep this email safe.</p>
      `;
      sendSmtpEmail.attachment = [
        {
          content: qrCodeBase64,
          name: 'QR_Code.png',
          type: 'image/png',
        }
      ];

      await apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log('Confirmation email sent');
    } catch (error) {
      console.error('Error sending confirmation email:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "registrations"), formData);
      console.log('Form data submitted:', formData);
      alert('Registration successful!');
      navigate(`/id-card/${docRef.id}`);

      // Get a new access token
      const accessToken = await getAccessToken();

      // Send data to Google Sheets
      const spreadsheetId = process.env.REACT_APP_SHEET;
      const range = 'Registrations!A2';
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=RAW`;

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      };

      const values = [
        [
          formData.name,
          formData.email,
          formData.phone,
          formData.gender,
          formData.food,
          formData.collegeName,
          formData.degree,
          formData.department,
          formData.yearOfStudy,
          formData.events.join(', '),
          formData.passportPic,
          formData.signaturePic,
          formData.paymentReceipt,
        ],
      ];

      await axios.post(url, { values }, { headers });
      console.log('Data added to Google Sheets');

      // Send confirmation email
      await sendConfirmationEmail(formData.email, formData.name, formData);
    } catch (error) {
      console.error('Error adding document: ', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        if (error.response.status === 401) {
          console.error('Unauthorized: Check your OAuth 2.0 token and permissions.');
        }
      }
    }
  };

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  return (
    <div className="registration-form">
      <h1>Symposium Registration</h1>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="form-section">
            <h3>Personal Details</h3>
            <label>Name: *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Email: *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Phone: *</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

            <label>Gender: *</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label>Food Preference: *</label>
            <select name="food" value={formData.food} onChange={handleChange} required>
              <option value="">Select Food</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non-Veg</option>
            </select>

            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="form-section">
            <h3>Academic Details</h3>
            <label>College Name: *</label>
            <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required />

            <label>Degree: *</label>
            <input type="text" name="degree" value={formData.degree} onChange={handleChange} required />

            <label>Department: *</label>
            <input type="text" name="department" value={formData.department} onChange={handleChange} required />

            <label>Year of Study: *</label>
            <input type="text" name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} required />

            <button type="button" onClick={prevStep}>Previous</button>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="form-section">
            <h3>Event Selection</h3>
            <label>Select the events you want to participate in: *</label>
            <select name="events" value={formData.events} onChange={handleChange} multiple required>
              <option value="Paper presentation">Paper Presentation</option>
              <option value="Error404">Error404</option>
              <option value="Workshop">Workshop</option>
            </select>

            <button type="button" onClick={prevStep}>Previous</button>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {currentStep === 4 && (
          <div className="form-section">
            <h3>Upload Documents</h3>
            <label>Passport Size Pic (Max 1MB): *</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'passportPic')}
              required
            />
            {uploadingPassport && <p>Uploading Passport Picture...</p>}

            <label>Signature Pic (Max 1MB): *</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'signaturePic')}
              required
            />
            {uploadingSignature && <p>Uploading Signature Picture...</p>}

            <button type="button" onClick={prevStep}>Previous</button>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {currentStep === 5 && (
          <div className="form-section">
            <h3>Payment Gateway</h3>
            <label>Registration Fee: ₹150</label>
            <p>Scan the QR code below to make the payment:</p>
            <img src="/img/electrowhiz2k25.png" alt="Google Pay QR Code" />
            <label>Payment Reference Number:</label>
            <input type="text" name="paymentQRCode" value={formData.paymentQRCode} onChange={handleChange} />

            <label>Upload Payment Receipt (Max 1MB):</label>
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'paymentReceipt')} />

            <button type="button" onClick={prevStep}>Previous</button>
            <button type="submit">Submit Registration</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationPage;