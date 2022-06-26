import React from "react";
import {useNavigate} from "react-router-dom";
import "../Home/Home.styles.css";
import logo from "../../Assets/logo.png";

function CreateAccount4() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/camera", {replace: true});
  }

  return (
    <div className="home-container">      
      <div className="home-up"></div>
      <img src={logo} alt="logo"/>
      <div className="home-middle">
        <h1 style={{maxWidth: "80%"}}>Comencemos con una foto del frente del DNI.</h1>        
      </div>
      <div className="home-down" style={{height: "20vh"}}>
      <button onClick={handleClick}> Sacar foto </button>
      <button style={{marginTop: "20px"}} onClick={handleClick}> Subir archivo </button>
      </div>
    </div>
  );
}

export default CreateAccount4;