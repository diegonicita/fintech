import React from "react";
import {useNavigate} from "react-router-dom";
import "../Home/Home.styles.css";
import logo from "../../Assets/logo.png";

function CreateAccount5() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/createAccount6", {replace: true});
  }

  return (
    <div className="home-container">      
      <div className="home-up"></div>
      <img src={logo} alt="logo"/>
      <div className="home-middle">
        <h1 style={{margin: "0", maxWidth: "80%"}}> ¡Excelente!</h1>        
        <h1 style={{margin: "0", maxWidth: "80%"}}> Ahora continuemos con una foto del dorso del DNI.</h1>        
      </div>
      <div className="home-down" style={{height: "20vh"}}>
      <button onClick={handleClick}> Sacar foto </button>
      <button style={{marginTop: "20px"}} onClick={handleClick}> Subir archivo </button>
      </div>
    </div>
  );
}

export default CreateAccount5;