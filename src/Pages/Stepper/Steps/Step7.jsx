import React from "react";
import logo from "../../../Assets/logo.png";
import CreateAccountComponent from "../../../components/CreateAccountBase";

function Step2({goNext}) {
  return (
 <CreateAccountComponent
  logo={logo}
  h1Title="Cuenta fue agregada con éxito."
  buttonText="Hacer prueba de vida"
  h1Style={{ maxWidth: "80%" }}
  divHomeDownStyle={{ height: "20vh" }}
  handleClick={goNext}
  /> 
  )
}

export default Step2;
