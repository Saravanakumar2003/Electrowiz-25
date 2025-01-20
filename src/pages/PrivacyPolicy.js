import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <h1>Privacy Policy</h1>
      <h2>Last Updated on: 20/01/2025 </h2>
      <p>
        At Electrowiz'25, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our services.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We collect personal and academic details such as:
      </p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Photo & Signature</li>
        <li>College, Department, Year of Study</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect to:
      </p>
      <ul>
        <li>Process your registration</li>
        <li>Send you confirmation emails and receipts</li>
        <li>Provide customer support</li>
        <li>Manage records for further college use</li>
      </ul>
      <h2>How We Share Your Information</h2>
      <p>
        We do not sell or rent your personal information to third parties. We may share your information with:
      </p>
      <ul>
        {/* <li>Razorpay, to process your payments</li> */}
        <li>Firebase, for database management</li>
        <li>Cloudinary, for image uploads and management</li>
        <li>Google APIs, for integrating with Google Sheets</li>
        <li>Sendinblue, for sending confirmation emails</li>
        <li>Web3Forms, for handling queries submissions</li>
        <li>Service providers who assist us in providing our services</li>
        <li>Law enforcement or regulatory authorities if required by law</li>
      </ul>
      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet or email transmission is ever fully secure or error-free.
      </p>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at contact@electrowiz.info.
      </p>
    </div>
  );
};

export default PrivacyPolicy;