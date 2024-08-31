import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';

const WebcamCapture = ({ onCapture }) => {
  const webcamRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (webcamRef.current) {
        capture();
      }
    }, 1000); // Chụp ảnh mỗi giây

    return () => clearInterval(timer); // Dọn dẹp timer khi component bị hủy
  }, []);

  const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: 'environment',
  };

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      onCapture(imageSrc);
    }
  };

  return (
    <div className="webcam">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
    </div>
  );
};

export default WebcamCapture;
