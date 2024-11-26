import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { toPng } from "html-to-image";

const IDCard = ({ participant }) => {
  const cardRef = useRef();

  const handleDownload = async () => {
    if (cardRef.current === null) {
      return;
    }

    const dataUrl = await toPng(cardRef.current);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${participant.name}_IDCard.png`;
    link.click();
  };

  return (
    <div>
      <div className="id-card" ref={cardRef}>
        <h2>Symposium ID Card</h2>
        <p><strong>Name:</strong> {participant.name}</p>
        <p><strong>College:</strong> {participant.collegeName}</p>
        <p><strong>Events:</strong> {participant.event}</p>
        <p><strong>Food Preference:</strong> {participant.food}</p>
        <img src={participant.passportPic} alt="Participant" />
        <QRCodeCanvas value={JSON.stringify(participant)} />
      </div>
      <button onClick={handleDownload}>Download ID Card</button>
    </div>
  );
};

export default IDCard;