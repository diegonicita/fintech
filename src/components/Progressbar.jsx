import React, { useEffect, useState } from "react";

function Progressbar({ goNext, time }) {
  const [progression, setProgression] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progression < 100) {
        setProgression((prevWidth) => prevWidth + 1);        
      }
    }, time);
    setTimeout( 
        () => {
            clearInterval(interval);
            goNext()}, time * 100)
    }, []);

  return (
    <div>
      <div
        style={{
          margin: "0 auto",
          width: "200px",
          display: "block",
          textAlign: "left",
        }}
      >
        <div
          style={{
            alignSelf: "initial",
            marginTop: "20px",
            width: "100%",
            backgroundColor: "gray",
            height: "16px",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              width: progression < 101? progression + "%": "100%",
              backgroundColor: "green",
              height: "16px",
              borderRadius: "5px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Progressbar;
