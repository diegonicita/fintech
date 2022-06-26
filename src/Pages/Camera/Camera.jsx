import React from "react";
import Webcam from "react-webcam";
import {useNavigate} from "react-router-dom";
import "./Camera.styles.css";

export const Camera = () => {

  // Camera Setup //
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  // Navigation //
  let query = new URLSearchParams(window.location.search);  
  let stepId = query.get("stepId");    
  const navigate = useNavigate();
  const handleConfirm = () => {
    if (stepId === "1") navigate("/createAccount5", {replace: true});
    if (stepId === "2") navigate("/createAccount6", {replace: true});
    if (stepId === "3") navigate("/createAccount7", {replace: true});
  }

  return (
    <div className="camera-container">
      {imgSrc === null && (
        <>
          <Webcam
            id="web-cam"
            videoConstraints={{
              width: 640,
              height: 1024,
              facingMode: "user",
              aspectRatio: 1.7777777777777777,
            }}
            audio={false}
            height={640}
            width={320}
            screenshotFormat="image/jpeg"
            ref={webcamRef}
          ></Webcam>
          <button className="camera-button" onClick={() => capture()}></button>
          <div className="rectangle"></div>
        </>
      )}

      <>
        {imgSrc !== null && (
          <>
            <img className="capture-img" src={imgSrc} alt="img" />
            <div className="camera-buttons-div">
            <button
              className="camera-retake-button"
              onClick={() => {
                setImgSrc(null);
              }}
            >
              Retake
            </button>
            <button className="camera-confirm-button" onClick={handleConfirm}>Confirmar
            </button>
            </div>
            <div className="rectangle"></div>
          </>
        )}
      </>
    </div>
  );
};
export default Camera;
