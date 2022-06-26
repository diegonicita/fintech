import React from "react";
import {useNavigate} from "react-router-dom";
import "../Home/Home.styles.css";
import logo from "../../Assets/logo.png";
import CreateAccountComponent from "../../components/CreateAccountBase";

function CreateAccount3() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/createAccount4", {replace: true});
  }

  return (
      <CreateAccountComponent 
      logo={logo}
      h1Title="¡Excelente! Ahora necesitamos fotos de tu DNI y una selfie."
      buttonText="Comenzar"
      h1Style={{maxWidth: "80%"}}
      divHomeDownStyle={{height: "20vh"}}
      handleClick={handleClick}
    /> 
  );
}

export default CreateAccount3;