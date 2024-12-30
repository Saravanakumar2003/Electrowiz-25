import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import axios from 'axios';
import QRCode from 'qrcode';
import '../css/RegistrationPage.css';
import Select from 'react-select';
import DOMPurify from 'dompurify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    isGudelines: false,
    isVelammalStudent: false,
    reciptPic: '',
  });

  const [uploadingPassport, setUploadingPassport] = useState(false);
  const [uploadingSignature, setUploadingSignature] = useState(false);
  const [uploadingRecipt, setUploadingRecipt] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [registrationFee, setRegistrationFee] = useState(0);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    calculateRegistrationFee();
  }, [formData.events, formData.isVelammalStudent]);

  const handleMultiChange = (selectedOptions) => {
    const sanitizedOptions = selectedOptions.map(option => ({
      value: DOMPurify.sanitize(option.value),
      label: DOMPurify.sanitize(option.label)
    }));
    setFormData({
      ...formData,
      events: sanitizedOptions
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setFormData({
      ...formData,
      [name]: sanitizedValue
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const sanitizedChecked = DOMPurify.sanitize(checked.toString()) === 'true';
    setFormData({
      ...formData,
      [name]: sanitizedChecked
    });
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file size (max 1MB) and format (only images)
    const validFormats = ['image/jpeg', 'image/png', 'image/jpg'];
    if (file.size > 1048576) {
      toast.error('File size should be less than 1MB');
      return;
    }
    if (!validFormats.includes(file.type)) {
      toast.error('Invalid file format. Only JPEG, PNG, and JPG are allowed.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

    if (type === 'passportPic') {
      setUploadingPassport(true);
    } else
      if (type === 'reciptPic') {
        setUploadingRecipt(true);
      }
      else {
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
        } else
          if (type === 'reciptPic') {
            setUploadingRecipt(false);
          }
          else {
            setUploadingSignature(false);
          }
      })
      .catch(err => {
        console.error('Upload failed:', err);
        toast.error('Upload failed. Please try again.');
        if (type === 'passportPic') {
          setUploadingPassport(false);
        }
        else if (type === 'reciptPic') {
          setUploadingRecipt(false);
        } 
        else {
          setUploadingSignature(false);
        }
      });
  };

  const validateStep = () => {
    let newErrors = {};
    if (currentStep === 0) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.food) newErrors.food = "Food preference is required";
      // if (!formData.passportPic) newErrors.passportPic = "Passport Pic is required";
    } else if (currentStep === 1) {
      if (!formData.collegeName) newErrors.collegeName = "College Name is required";
      if (!formData.degree) newErrors.degree = "Degree is required";
      if (!formData.department) newErrors.department = "Department is required";
      if (!formData.yearOfStudy) newErrors.yearOfStudy = "Year of Study is required";
      // if (!formData.signaturePic) newErrors.signaturePic = "Signature Pic is required";
    } else if (currentStep === 2) {
      if (!formData.events || formData.events.length === 0) newErrors.events = "At least one event must be selected";
      if (!formData.isGudelines) newErrors.isGudelines = "Please agree to the guidelines";
    }
    //else if (currentStep === 3) {
    //   if (!formData.reciptPic) newErrors.reciptPic = "Recipt Pic is required";
    // }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      Object.values(newErrors).forEach(error => toast.error(error));
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
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
          <p>Kindly, Join this Whatsapp group for further notification: <a href="https://chat.whatsapp.com/ESbkNQsEQezAroe1nct8Uf">Click Here To Join</a></p>
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
      toast.log('Confirmation email sent successfully:', response.data);
    } catch (error) {
      toast.error('Error sending confirmation email, Kindly contact the team');
      if (error.response) {
        console.error('Error response data:', error.response.data);
      }
    }
  };

  const handlePaymentSuccess = async (event) => {
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
          new Date().toLocaleString(
            'en-US', { timeZone: 'Asia/Kolkata' }
          ).replace(',', ''),
          formData.name,
          formData.email,
          formData.phone,
          formData.gender,
          formData.food,
          formData.collegeName,
          formData.degree,
          formData.department,
          formData.yearOfStudy,
          events.join(', '),
          formData.passportPic,
          formData.signaturePic,
          formData.isVelammalStudent ? 'Yes' : 'No',
          registrationFee,
          formData.reciptPic,
          docRef.id
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

  const handlePayment = async () => {
    // const orderResponse = await axios.post('/api/payment', { amount: registrationFee });
    const orderResponse = await axios.post('http://localhost:5000/create-order', { amount: registrationFee * 100}); 
    const { amount, id: order_id, currency } = orderResponse.data;

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: amount.toString(),
      currency: currency,
      name: 'Electrowiz\'25',
      description: 'Event Registration Fee',
      order_id: order_id,
      handler: handlePaymentSuccess,
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        address: 'Velammal Engineering College, Chennai'
      },
      theme: {
        color: '#F37254'
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    window.focus();
  };

  const calculateRegistrationFee = () => {
    let fee = 0;
    let hasWorkshop = false;
    let hasOtherEvents = false;

    formData.events.forEach(event => {
      if (event.value === 'Workshop') {
        hasWorkshop = true;
      } else {
        hasOtherEvents = true;
      }
    });

    if (hasWorkshop && hasOtherEvents) {
      fee = 250;
    } else if (hasWorkshop) {
      fee = 100;
    } else if (hasOtherEvents) {
      fee = 150;
    }

    if (formData.isVelammalStudent && hasOtherEvents) {
      fee -= 50;
    }

    setRegistrationFee(fee);
  };

  return (
    <div className="registration-form">
      <ToastContainer />
      <h2 className='Headings'>Event Registration Form</h2>
      <p className='Headings2'>Dear Participants, the site is still in test mode <br />and the registration opens from January 2nd, 2025.</p>
      <form id="msform">
        <ul id="progressbar">
          <li className={currentStep >= 0 ? "active" : ""}>Personal <br /> Details</li>
          <li className={currentStep >= 1 ? "active" : ""}>Academic<br /> Details</li>
          <li className={currentStep >= 2 ? "active" : ""}>Event <br />Selection</li>
          <li className={currentStep >= 3 ? "active" : ""}>Payment</li>
        </ul>

        {currentStep === 0 && (
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
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
            <br />
            <label>Passport Size Pic (Max 1MB):</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'passportPic')}
              
            />
            {uploadingPassport && <label>Uploading Passport Picture...</label>}
            <br />
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
          </fieldset>
        )}

        {currentStep === 1 && (
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
              <option value="ECE">ECE</option>
              <option value="CSE">CSE</option>
              <option value="EEE">EEE</option>
              <option value="MECH">Mech</option>
              <option value="CIVIL">Civil</option>
              <option value="IT">IT</option>
              <option value="AI&DS">AI&DS</option>
              <option value="EIE">EIE</option>
              <option value="OTHER">Other</option>
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
            <label>Signature Pic (Max 1MB):</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'signaturePic')}
              
            />
            {uploadingSignature && <label>Uploading Signature Picture...</label>}
            <br />
            <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
          </fieldset>
        )}

        {currentStep === 2 && (
          <fieldset>
            <h3 className="fs-title">Event Selection</h3>
            <label>Select all the events you want to participate in: </label>
            <Select
              name="events"
              value={formData.events}
              onChange={handleMultiChange}
              options={eventOptions}
              isMulti
              required
            />
            <br />
            <h3 ClassName="fs-title">General Guidelins</h3>
            <label>1. You can register to any numbers of events you want.</label>
            <label>2. Make sure to be present at the venue 30 minutes before the event starts.</label>
            <label>3. The event will be conducted offline at Velammal Engineering College.</label>
            <label>4. Students must carry their college ID card and a online copy of the mail received after registration.</label>
            <label>5. Participants are requested to collect the event tags from the registration desk.</label>
            <label>6. The jury decision will be final in all matters.</label>
            <label>7. Dress code should be Formal wear.</label>
            <label>8. Exciting Prizes will be given to winners and Participation certificates will be provided for all.</label>
            <label>9. Students should refrain from abusive language, obscene display and a good decorum will be appreciated.</label>
            <label>10. Smoking and consumption of alcohols and any such substance is strictly prohibited inside the college premises.</label>
            <label></label>
            <br />
            <div class="checkbox">
              <input
                id="checkbox-2"
                className="checkbox-custom"
                type="checkbox"
                name="isGudelines"
                checked={formData.isGudelines}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox-2" className="checkbox-custom-label">
                I agree to Guidelines, <a href="https://www.electrowiz.info/privacy-policy">Privacy Policy</a> & <a href="https://www.electrowiz.info/terms-of-use">Terms of Use</a>
              </label>
            </div>
            <br />
            <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
          </fieldset>
        )}

        {currentStep === 3 && (
          <fieldset>
            <h3 className="fs-title">Payment</h3>
            <br />
            <div class="checkbox">
              <input
                id="checkbox-1"
                className="checkbox-custom"
                type="checkbox"
                name="isVelammalStudent"
                checked={formData.isVelammalStudent}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox-1" className="checkbox-custom-label">
                Are you ECE student of Velammal Engineering College? (Get ₹50 off by checking this box)
              </label>
              <label><strong>Discount is only on Events (Not Workshop) for ECE Students of VEC</strong></label>
            </div>
            <br />
            <h2>Total Registration Fee: ₹{registrationFee}</h2>
            <br />
            <img className="qr" src="/img/QR.jpg" alt="Payment" />
            <br />
            <div class="accountbox">
            <p className='accountdetails'>Bank Details: <br />
              UPI: leenavictorece-2@okaxis <br />
              Name: J.S.Leena Jasmine <br />
              Bank Name : State Bank of India<br />
              Branch Name : Tondiarpet<br />
              Acc no : 10239319624<br />
              IFSC Code :SBIN0003306</p>
            </div>
            <br />
            <label>Payment Recipt (Max 1MB):</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'reciptPic')}
              required
            />
            {uploadingRecipt && <label>Uploading Recipt Picture...</label>}
            {/* <label>Click on the "Pay Now" button to proceed with the payment.</label> */}
            <br />
            <label><strong>Note:</strong> No refunds will be provided (Refer our <a href="https://www.electrowiz.info/refund-policy">Refund Policy</a>)</label>
            {/* <label>Kindly, Join this Whatsapp group for further notification: <a href="https://chat.whatsapp.com/ESbkNQsEQezAroe1nct8Uf">Click Here To Join</a></label> */}
            <br />
            <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
            {/* <button type="button" className="submit action-button" onClick={handlePayment}>Pay Now</button> */}
            <button type="button" className="submit action-button" onClick={handlePaymentSuccess}>Submit</button>
          </fieldset>
        )}
      </form>
    </div>
  );
}

export default RegistrationPage;