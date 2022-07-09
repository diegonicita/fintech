import React from "react";
import logo from "../../../Assets/logo.png";
import CreateAccountComponent from "../../../components/CreateAccountBase";

function Step3({ goNext }) {
  return (
    <CreateAccountComponent
      logo={logo}
      h1Title="¡Excelente! Ahora necesitamos fotos de tu DNI y una selfie."
      buttonText="Comenzar"
      h1Style={{ maxWidth: "80%" }}
      divHomeDownStyle={{ height: "20vh" }}
      handleClick={goNext}
    />
  );
}

export default Step3;
