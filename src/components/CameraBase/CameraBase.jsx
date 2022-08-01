import React from "react";
import Webcam from "react-webcam";
import "./Camera.styles.css";

export const CameraBase = ({goNext, numeroFoto}) => {
  const webcamRef = React.useRef(null);  
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    sessionStorage.setItem("imgSrc" + numeroFoto, imageSrc);
  }, [webcamRef, setImgSrc, numeroFoto]);

  return (
    <div className="camera-container">
      {imgSrc === null && (
        <>
          <Webcam
            id="web-cam"
            videoConstraints={{
              width: 320,
              height: 640,
              facingMode: "user",
              aspectRatio: 1.7777777777777777,
            }}
            audio={false}
            width={320}
            height={640}
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
              <button className="camera-confirm-button" onClick={goNext}>
                Confirmar
              </button>
            </div>
            <div className="rectangle"></div>
          </>
        )}
      </>
    </div>
  )
};
export default CameraBase;
