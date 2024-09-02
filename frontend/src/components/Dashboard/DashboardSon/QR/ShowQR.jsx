import React, { useState } from 'react';
import './ShowQR.css'
import WebcamCapture from './WebcamCapture';
import QRCodeScanner from './QRCodeScanner';
import { useNavigate } from 'react-router-dom';

// const token = localStorage.getItem('authToken');

const ShowQR = () => {

  const [imageSrc, setImageSrc] = useState('')
  const navigate = useNavigate()

  return (
    <div className="showQR">
      <h2>QR Code</h2>
      <WebcamCapture onCapture={setImageSrc} />
      <QRCodeScanner imageSrc={imageSrc} />
      <button className='backButton' onClick={() => navigate('/dashboard')}>Trở Lại</button>
    </div>
  )
}

export default ShowQR;
