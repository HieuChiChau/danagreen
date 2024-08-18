import React, { useEffect, useState } from 'react';
import jsQR from 'jsqr';

const QRCodeScanner = ({ imageSrc }) => {
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    if (imageSrc) {
      decodeQRCode(imageSrc);
    }
  }, [imageSrc]);

  const decodeQRCode = (imageSrc) => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, canvas.width, canvas.height);
      if (code) {
        setQrCode(code.data);
      }
    };
  };

  return (
    <div className="qr-result">
      <p>{qrCode || 'Chưa phát hiện QR code'}</p>
    </div>
  );
};

export default QRCodeScanner;
