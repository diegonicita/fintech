import React from "react";
import {useNavigate} from "react-router-dom";
import "../Home/Home.styles.css";
import logo from "../../Assets/logo.png";

function CreateAccount6() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/createAccount7", {replace: true});
  }

  return (
    <div className="home-container">      
      <div className="home-up"></div>
      <img src={logo} alt="logo"/>
      <div className="home-middle">
        <h1 style={{margin: "0", maxWidth: "80%"}}>¡Excelente!</h1>        
        <h1 style={{margin: "0",maxWidth: "80%"}}>Por último, necesitamos que te saques una selfie con DNI en mano.</h1>        
        <h1 style={{margin: "0",maxWidth: "80%", color: "red"}}> Importante: sostené el DNI en frente tuyo.</h1>        
      </div>
      <div className="home-down" style={{height: "20vh"}}>
      <button onClick={handleClick}> Sacar foto </button>      
      </div>
    </div>
  );
}

export default CreateAccount6;