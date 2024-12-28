import React, { useEffect } from 'react';
import '../css/LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 5000); 
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="particles"></div>
      <div className="logo-container">
        <img src="/logo192.png" alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default LoadingScreen;