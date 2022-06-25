import React from "react";
import {useNavigate} from "react-router-dom";
import "../Home/Home.styles.css";
import logo from "../../Assets/logo.png";

function CreateAccount3() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/createAccount4", {replace: true});
  }

  return (
    <div className="home-container">      
      <div className="home-up"></div>
      <img src={logo} alt="logo"/>
      <div className="home-middle">
        <h1 style={{maxWidth: "80%"}}> ¡Excelente! Ahora necesitamos fotos de tu DNI y una selfie.</h1>        
      </div>
      <div className="home-down" style={{height: "20vh"}}>
      <button onClick={handleClick}> Comenzar </button>
      </div>
    </div>
  );
}

export default CreateAccount3;