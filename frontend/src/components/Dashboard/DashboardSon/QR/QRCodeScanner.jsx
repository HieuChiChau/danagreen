import React, { useEffect, useState } from 'react';
import jsQR from 'jsqr';
import QRCode from '../../../../api/qrcode'

const QRCodeScanner = ({ imageSrc, token }) => {
  const [qrCode, setQrCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (imageSrc) {
      decodeQRCode(imageSrc);
    }
  }, [imageSrc]);

  const decodeQRCode = (imageSrc) => {

    const image = new Image();
    image.src = imageSrc;

    image.onload = async () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, canvas.width, canvas.height);

      if (code) {
        setQrCode(code.data);
        await sendCodeToAPI(code.data)
      }
      else {
        setError('Không phát hiện mã QR')
      }
    };

  };

  const sendCodeToAPI = async (code) => {
    try {
      const result = await QRCode.decodeQRCode(code);
      const parsedData = parseDecodedData(result.decrypted_data);

      await QRCode.saveQRCodeResult(token, parsedData);
    } catch (error) {
      console.error('Error processing QR code:', error);
      setError('Có lỗi xảy ra khi xử lý mã QR.');
    }
  };

  const parseDecodedData = (data) => {
    const result = {
      paper: 0,
      metal: 0,
      plastic: 0,
    };

    const regex = /([a-zA-Z]+)(\d+)/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      const [_, type, quantity] = match;
      if (result[type] !== undefined) {
        result[type] = parseInt(quantity, 10);
      }
    }

    return result;
  };

  return (
    <div className="qr-result">
      <p>{qrCode ? JSON.stringify(qrCode) : 'Chưa phát hiện QR code'}</p>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default QRCodeScanner;
