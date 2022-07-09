import React from "react";
import logo from "../../../Assets/logo.png";
import CreateAccountComponent from "../../../components/CreateAccountBase";

function Step4({ goNext }) {

  const handleUploadFile = () => {
    // navigate("/camera", {replace: true});
  };

  return (
    <CreateAccountComponent
      logo={logo}
      h1Title="Comencemos con una foto del frente del DNI."
      buttonText="Sacar foto"
      h1Style={{ maxWidth: "80%" }}
      divHomeDownStyle={{ height: "30vh" }}
      handleClick={goNext}>
      <form></form>
      <button style={{ marginTop: "20px" }} onClick={handleUploadFile}>
        <label style={{ width: "100%", cursor: "pointer" }}>
          Subir archivo
          <input style={{ display: "none" }} type="file"></input>
        </label>
      </button>
    </CreateAccountComponent>
  );
}

export default Step4;
