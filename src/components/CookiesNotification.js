import React, { useState, useEffect } from 'react';
import '../css/CookiesNotification.css';

const CookiesNotification = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowNotification(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowNotification(false);
  };

  if (!showNotification) {
    return null;
  }

  return (
    <div className="cookies-notification">
      <p>
        We use cookies to ensure you get the best experience on our website. By continuing to use our site, you agree to our <a href="/privacy-policy">Privacy Policy</a>.
        <button onClick={handleAccept}>I Understand</button>
      </p>
    </div>
  );
};

export default CookiesNotification;