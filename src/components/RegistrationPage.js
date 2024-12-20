import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import axios from 'axios';
import QRCode from 'qrcode';
import $ from 'jquery';
import '../css/RegistrationPage.css';
import 'jquery.easing';
import Select from 'react-select';

const eventOptions = [
  { value: 'Idea ignition', label: 'Idea ignition' },
  { value: 'Imaginarium', label: 'Imaginarium' },
  { value: 'Quiztronics', label: 'Quiztronics' },
  { value: 'Byte and breakthrough', label: 'Byte and breakthrough' },
  { value: 'Infinity squad', label: 'Infinity squad' },
  { value: 'Linked up', label: 'Linked up' },
  { value: 'Melody madness', label: 'Melody madness' },
  { value: 'Pixel perfect', label: 'Pixel perfect' },
  { value: 'Mystery matters', label: 'Mystery matters' },
  { value: 'Workshop', label: 'Workshop' }
];


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

  const navigate = useNavigate();

  useEffect(() => {
    $(document).ready(function () {
      var current_fs, next_fs, previous_fs; //fieldsets
      var left, opacity, scale; //fieldset properties which we will animate
      var animating; //flag to prevent quick multi-click glitches

      $(".next").click(function () {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
          step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50) + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
              'transform': 'scale(' + scale + ')',
              'position': 'absolute'
            });
            next_fs.css({ 'left': left, 'opacity': opacity });
          },
          duration: 800,
          complete: function () {
            current_fs.hide();
            animating = false;
          },
          //this comes from the custom easing plugin
          easing: 'easeInOutBack'
        });
      });

      $(".previous").click(function () {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //de-activate current step on progressbar
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
          step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1 - now) * 50) + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({ 'left': left });
            previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
          },
          duration: 800,
          complete: function () {
            current_fs.hide();
            animating = false;
          },
          //this comes from the custom easing plugin
          easing: 'easeInOutBack'
        });
      });
    });
  }, []);
  
  const handleMultiChange = (selectedOptions) => {
    setFormData({
      ...formData,
      events: selectedOptions
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
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

  const dataURLtoFile = (dataurl, filename) => {
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

  const sendConfirmationEmail = async (email, name, formData) => {
    try {
      const qrCodeURL = await generateQRCodeURL(formData);
      const qrCodeFile = dataURLtoFile(qrCodeURL, 'qrcode.png');
      const qrCodeBase64 = qrCodeURL.split(',')[1]; // Extract base64 content

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
            <li>Events: ${formData.events.join(', ')}</li>
          </ul>
          <br>
          <strong>Kindly, read the following instructions:</strong>
          <p>1. Make sure to carry your ID card and this email to the event.</p>
          <p>2. The event will start at 9:00 AM on 1st Feburary 2025.</p>
          <p>3. The venue is Velammal Engineering College, Chennai.</p>
          <br>
          <p>We look forward to seeing you at the event!</p>
          <br>
          <p>Best regards,</p>
          <p>Electrowiz'25 Team</p>
          <br>
          <p><strong>Note:</strong> If you lose this email, you cannot participate in the event. Please keep this email safe.</p><p>Attached is your QR Code for the event.</p>
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

      const response = await axios.post('https://api.brevo.com/v3/smtp/email', data, { headers });
      console.log('Confirmation email sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Extract the values from the selected event objects
    const events = formData.events.map(event => event.value);
  
    try {
      const docRef = await addDoc(collection(db, "registrations"), {
        ...formData,
        events
      });
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
          events.join(', '), // Join the event values into a string
          formData.passportPic,
          formData.signaturePic,
          formData.paymentReceipt,
        ],
      ];
  
      await axios.post(url, { values }, { headers });
      console.log('Data added to Google Sheets');
  
      // Send confirmation email
      await sendConfirmationEmail(formData.email, formData.name, { ...formData, events });
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

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit} id="msform">
        <ul id="progressbar">
          <li className="active">Personal <br /> Details</li>
          <li>Academic<br /> Details</li>
          <li>Event <br />Selection</li>
          <li>Payment</li>
        </ul>

        <fieldset>
          <h3 className="fs-title">Personal Details</h3>
          <label>Name:</label>
          <input className="inputText" type="text" name="name" value={formData.name} onChange={handleChange} required />
          <br />
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <br />
          <label>Phone: </label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          <br />
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <br />
          <label>Food Preference:</label>
          <select name="food" value={formData.food} onChange={handleChange} required>
            <option value="">Select Food</option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
          </select>
          <br />
          <label>Passport Size Pic (Max 1MB):</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, 'passportPic')}
            required
          />
          {uploadingPassport && <p>Uploading Passport Picture...</p>}
          <br />
          <label>Signature Pic (Max 1MB):</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, 'signaturePic')}
            required
          />
          {uploadingSignature && <p>Uploading Signature Picture...</p>}
          <br />
          <input type="button" name="next" className="next action-button" value="Next" />
        </fieldset>

        <fieldset>
          <h3 className="fs-title">Academic Details</h3>
          <label>College Name: </label>
          <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required />
          <br />
          <label>Degree: </label>
          <select type="text" name="degree" value={formData.degree} onChange={handleChange} required>
            <option value="">Select Degree</option>
            <option value="B.E">B.E</option>
            <option value="BTech">BTech</option>
          </select>
          <br />
          <label>Department: </label>
          <select type="text" name="department" value={formData.department} onChange={handleChange} required>
            <option value="">Select Department</option>
            <option value="ece">ECE</option>
            <option value="cse">CSE</option>
            <option value="eee">EEE</option>
            <option value="mech">Mech</option>
            <option value="civil">Civil</option>
            <option value="it">IT</option>
            <option value="ai&ds">AI&DS</option>
            <option value="other">Other</option>
          </select>
          <br />
          <label>Year of Study: </label>
          <select type="text" name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} required>
            <option value="">Select Year</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
          </select>
          <br />
          <input type="button" name="previous" className="previous action-button" value="Previous" />
          <input type="button" name="next" className="next action-button" value="Next" />
        </fieldset>

        <fieldset>
          <h3 className="fs-title">Event Selection</h3>
          <label>Select the events you want to participate in: </label>
          <Select
            name="events"
            value={formData.events}
            onChange={handleMultiChange}
            options={eventOptions}
            isMulti
            required
          />
          <br />
          <input type="button" name="previous" className="previous action-button" value="Previous" />
          <input type="button" name="next" className="next action-button" value="Next" />
        </fieldset>

        <fieldset>
          <h3 className="fs-title">Payment Gateway</h3>
          <label>Registration Fee: ₹150</label>
          <br /><br />
          <label>Payment Reference Number:</label>
          <input type="text" name="paymentQRCode" value={formData.paymentQRCode} onChange={handleChange} />

          <label>Upload Payment Receipt (Max 1MB):</label>
          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'paymentReceipt')} />

          <input type="button" name="previous" className="previous action-button" value="Previous" />
          <button type="submit" className="submit action-button">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default RegistrationPage;