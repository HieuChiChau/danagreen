import React, { useState } from 'react';
import './ShowQR.css'
import WebcamCapture from './WebcamCapture';
import QRCodeScanner from './QRCodeScanner';
import { useNavigate } from 'react-router-dom';

const ShowQR = () => {
  const [imageSrc, setImageSrc] = useState('');
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate('/dashboard');
  };
  return (
    <div className="showQR">
      <h2>QR Code</h2>
      <WebcamCapture onCapture={setImageSrc} />
      <QRCodeScanner imageSrc={imageSrc} />
      <button className='backButton' onClick={handleBackClick}>Trở Lại</button>
    </div>
  );
};

export default ShowQR;
