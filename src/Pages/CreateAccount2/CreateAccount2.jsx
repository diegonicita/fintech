import React from "react";
import {useNavigate} from "react-router-dom";
import CreateAccountComponent from "../../components/CreateAccountBase";
import "../Home/Home.styles.css";
import logo from "../../Assets/logo.png";

function CreateAccount2() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/createAccount3", {replace: true});
  }

  return (
    <CreateAccountComponent 
      logo={logo}
      h1Title="Cuenta fue agregada con éxito."
      buttonText="Hacer prueba de vida"
      h1Style={{maxWidth: "80%"}}
      divHomeDownStyle={{height: "20vh"}}
      handleClick={handleClick}
    />  
  );
}

export default CreateAccount2;