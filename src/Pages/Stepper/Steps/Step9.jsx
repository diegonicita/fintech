import React from "react";
import * as s from "./styles";
import Button from "../../../components/Button/Button";

function Step4({ goNext }) {

  const handleUploadFile = () => {
    // navigate("/camera", {replace: true});
  };

  return (
    // <CreateAccountComponent
    //   logo={logo}
    //   h1Title="Comencemos con una foto del frente del DNI."
    //   buttonText="Sacar foto"
    //   h1Style={{ maxWidth: "80%" }}
    //   divHomeDownStyle={{ height: "30vh" }}
    //   handleClick={goNext}>
    //   <form></form>
    //   <button style={{ marginTop: "20px" }} onClick={handleUploadFile}>
    //     <label style={{ width: "100%", cursor: "pointer" }}>
    //       Subir archivo
    //       <input style={{ display: "none" }} type="file"></input>
    //     </label>
    //   </button>
    // </CreateAccountComponent>
     <s.Form type="POST">
     <div style={{ margin: "50px" }} />
     <h2 style={{ textAlign: "center" }}>Comencemos con una foto del frente del DNI.</h2>    
     <div style={{ margin: "15px" }} />
     <s.Botonera>
        <div style={{margin: "10px"}} />
        <Button handleClick={goNext} type="button">Sacar foto</Button>      
        <div style={{margin: "10px"}} />
        <Button type="file" handleClick={handleUploadFile}>Subir archivo</Button>        
        <div style={{margin: "10px"}} />
      </s.Botonera>     
    </s.Form>
  );
}

export default Step4;
