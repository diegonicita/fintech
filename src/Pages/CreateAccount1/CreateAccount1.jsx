import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount1.styles.css";
import logo from "../../Assets/logo.png";

function CreateAccount1() {
  const [progressbarWidth, setProgressbarWidth] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
    if (progressbarWidth < 100) {
      setProgressbarWidth((prevWidth) => prevWidth + 1);
    }}, 10);
    GoNext(2000, interval);
  }, []);

  function GoNext(time, interval) {
    setTimeout(() => {
      clearInterval(interval);
      navigate("/createAccount2", { replace: true });
    }, time);
  }

  return (
    <>
      <div className="home-container" style={{ height: "70vh"}}>
        <div className="home-up"></div>
        <img src={logo} alt="logo" />
        <div className="home-middle">
          <h1 style={{ maxWidth: "60%" }}>            
            Estamos guardando la información, por favor aguarde{" "}
          </h1>
        </div>        
      </div>
      <div>
          <div style={{ margin: "0 auto", width: "200px", display: "block", textAlign: "left" }}>
            <div style={{ 
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
                  width: progressbarWidth,
                  backgroundColor: "green",
                  height: "16px",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
          </div>
        </div>
    </>
  );
}

export default CreateAccount1;
