import React from "react";
import logo from "../../../Assets/logo.png";
import Progressbar from "../../../components/Progressbar";

function Step1({goNext, time}) {
  return (
    <>      
      <div className="home-container">
        <div className="home-up"></div>
        <img src={logo} alt="logo" />
        <div className="home-middle">
          <h1>
            Estamos guardando la información, por favor aguarde
          </h1>
        </div>       
      <Progressbar goNext={goNext} time={time}/>  
      </div>
      
    </>
  );
}

export default Step1;
