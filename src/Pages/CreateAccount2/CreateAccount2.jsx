import React from "react";
import {useNavigate} from "react-router-dom";
import "../Home/Home.styles.css";
import logo from "../../Assets/logo.png";

function CreateAccount2() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/createAccount3", {replace: true});
  }

  return (
    <div className="home-container">
      {/* <div className="home-background">Home</div> */}
      <div className="home-up"></div>
      <img src={logo} alt="logo"/>
      <div className="home-middle">
        <h1 style={{maxWidth: "80%"}}> Cuenta fue agregada con éxito.</h1>        
      </div>
      <div className="home-down" style={{height: "10vh"}}>
      <button onClick={handleClick}> Hacer prueba de vida </button>
      </div>
    </div>
  );
}

export default CreateAccount2;