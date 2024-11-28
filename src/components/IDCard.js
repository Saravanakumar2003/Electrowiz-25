import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import "../css/IDcard.css";

const IDCard = ({ participant }) => {
  const cardRef = useRef();

  const handleDownload = async () => {
    if (cardRef.current === null) {
      return;
    }

    try {
      const canvas = await html2canvas(cardRef.current, { useCORS: true });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${participant.name}_IDCard.png`;
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div>
      <div className="id-card" ref={cardRef}>
        <img src="/img/VEC.png" alt="Logo" className="logo" />
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
  );
};

export default IDCard;