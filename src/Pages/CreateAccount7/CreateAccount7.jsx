import React from "react";
import {useNavigate} from "react-router-dom";
import "../Home/Home.styles.css";
import logo from "../../Assets/logo.png";

function CreateAccount7() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/createAccount1", {replace: true});
  }

  return (
    <div className="home-container">      
      <div className="home-up"></div>
      <img src={logo} alt="logo"/>
      <div className="home-middle">
        <h1 style={{margin: "0", maxWidth: "80%"}}>¡Excelente, ya terminamos!</h1>        
        <h1 style={{margin: "0",maxWidth: "80%"}}>Pronto nos pondremos en contacto con vos.</h1>                
      </div>
      <div className="home-down" style={{height: "20vh"}}>
      <button onClick={handleClick}> Finalizar </button>      
      </div>
    </div>
  );
}

export default CreateAccount7;