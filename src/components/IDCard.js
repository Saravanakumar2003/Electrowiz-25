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
    <div class="id">
      <p className="t1">Note: You will recieve an email with an QR (keep that safe) or this ID card. Without this your entry will be denied.</p>
      <p className="t1">Kindly, Join this Whatsapp group for further notification: <a href="https://chat.whatsapp.com/ESbkNQsEQezAroe1nct8Uf">Click Here</a></p>
      <button className="downloadbtn" onClick={handleDownload}>Download ID Card</button>
      <br />
      <div class="id-card" ref={cardRef}>
        <div class="id-header">
          <img src="https://i.postimg.cc/L8XvbmQ5/Vec.png" class="id-logo" alt="logo" />
          <img class="id-photo" src={participant.passportPic} alt="photo" />
        </div>
        <div class="id-details">
          <h1 class="m-name">{participant.name}</h1>
          <h3 class="m-designation">{participant.collegeName}</h3>
          <div class="m-info">
            <div>
              <div class="m-info-group">
                <h4 class="info-label">Phone: </h4>
                <h4 class="info-value">{participant.phone}</h4>
              </div>
              <div class="m-info-group">
                <h4 class="info-label">Email: </h4>
                <h4 class="info-value email">{participant.email}</h4>
              </div>
              <div class="m-info-group">
                <h4 class="info-label">Food: </h4>
                <h4 class="info-value">{participant.food}</h4>
              </div>
            </div>
            <div class="m-qrcode">
              <QRCodeCanvas value={JSON.stringify(participant)} size={150} />
            </div>
          </div>
        </div>
        <div class="id-footer">
          www.electrowiz.info
        </div>
      </div>
     </div >
  );
};

export default IDCard;