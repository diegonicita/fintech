import React from "react";
import Webcam from "react-webcam";
import "./Camera.styles.css";

export const Camera = () => {

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

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
          <button className="camera-button" onClick={()=> capture()}>           
          </button>
          <div className="rectangle"></div>          
          </>
        
      )}

      <>
        {imgSrc !== null && (
          <>
            <img className="capture-img" src={imgSrc} alt="img" />
            <button className="camera-retake-button"
              onClick={() => {
                setImgSrc(null);
              }}
            >
              Retake
            </button>
            <button className="camera-confirm-button"
              onClick={() => {
            
              }}
            >
              Confirmar
            </button>
            <div className="rectangle"></div>
          </>
        )}
      </>
    </div>
  );
};
export default Camera;
