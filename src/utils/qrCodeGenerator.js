import QRCode from "qrcode";

// Function to generate a QR code URL from a unique ID
export async function generateQRCodeURL(uniqueID) {
  const qrCodeURL = await QRCode.toDataURL(uniqueID);
  return qrCodeURL;
}
