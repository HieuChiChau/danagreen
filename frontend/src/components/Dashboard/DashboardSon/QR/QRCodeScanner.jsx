import React, { useEffect, useState } from 'react';
import jsQR from 'jsqr';
import CryptoJS from 'crypto-js';
import QRCode from '../../../../api/history';
import api from '../../../../api/api'

const QRCodeScanner = ({ imageSrc }) => {
  const [statusMessage, setStatusMessage] = useState('');

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
        try {
          const data = decryptData(code.data);
          const parsed = parseDecodedData(data);
          await saveTrashData(parsed);
        } catch (error) {
          console.error('Error decrypting QR code:', error);
          setStatusMessage('Tích điểm thất bại');
        }
      } else {
        setStatusMessage('Không phát hiện mã QR');
      }
    };
  };

  const decryptData = (ciphertextBase64) => {
    const key = CryptoJS.enc.Utf8.parse('danagreenkey0807'); // 16 byte
    const iv = CryptoJS.enc.Utf8.parse('danagreenivv1605');  // 16 byte
    const ciphertext = CryptoJS.enc.Base64.parse(ciphertextBase64);
    const decrypted = CryptoJS.AES.decrypt(
      { ciphertext: ciphertext },
      key,
      { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
    );
    return decrypted.toString(CryptoJS.enc.Utf8);
  };

  const parseDecodedData = (data) => {
    const result = {
      paper: 0,
      metal: 0,
      plastic: 0,
      randomNumber: 0,
    };

    // Regex để tách phần số ngẫu nhiên ra khỏi chuỗi
    const randomNumberMatch = /ra(\d+)$/;
    const randomNumberResult = randomNumberMatch.exec(data);

    if (randomNumberResult) {
      result.randomNumber = parseInt(randomNumberResult[1], 10);
      // Loại bỏ phần số ngẫu nhiên khỏi chuỗi
      data = data.replace(randomNumberMatch[0], '');
    }

    // Regex để tách các phần còn lại và lấy số lượng
    const itemRegex = /(pa\d+)|(pl\d+)|(me\d+)/g;
    let itemMatch;

    while ((itemMatch = itemRegex.exec(data)) !== null) {
      const [fullMatch] = itemMatch;
      const type = fullMatch.substring(0, 2);
      const quantity = parseInt(fullMatch.substring(2), 10);

      switch (type) {
        case 'pa': // "paper"
          result.paper = quantity;
          break;
        case 'pl': // "plastic"
          result.plastic = quantity;
          break;
        case 'me': // "metal"
          result.metal = quantity;
          break;
        default:
          console.warn(`Unknown type: ${type}`);
          break;
      }
    }

    return result;
  };

  const saveTrashData = async (data) => {
    const token = localStorage.getItem('authToken');
    try {
      // Lưu dữ liệu QR code
      await QRCode.saveQRCodeResult(token, data);

      // Gọi API thứ ba
      const response = await api.get('/end');

      const result = await response.data;
      console.log('Third-party API response:', result);

      setStatusMessage('Tích điểm thành công và dữ liệu từ API thứ ba đã được lấy');
    } catch (error) {
      console.error('Error saving trash data or fetching from third-party API:', error);
      console.error('Error fetching data:', error.message);
      setStatusMessage('Tích điểm thành công');
    }
  };


  return (
    <div className="qr-result">
      <p className={statusMessage === 'Tích điểm thành công' ? 'success' : 'error'}>
        {statusMessage}
      </p>
    </div>
  );
};

export default QRCodeScanner;
