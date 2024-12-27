import React, { useState } from 'react';
import '../css/CookiesNotification.css';

const CookiesNotification = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleAccept = () => {
    setShowNotification(false);
  };

  if (!showNotification) {
    return null;
  }

  return (
    <div className="cookies-notification">
      <p>
        We use cookies to ensure you get the best experience on our website. By continuing to use our site, you agree to our <a href="/privacy-policy">Privacy Policy</a>.
      </p>
      <button onClick={handleAccept}>Okay</button>
    </div>
  );
};

export default CookiesNotification;