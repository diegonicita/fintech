import React from "react";
import * as s from "./styles";
import Button from "../../../components/Button/Button";

function Step3({ goNext }) {
  return (
    <s.Form type="POST">
    <div style={{ margin: "50px" }} />
    <h2 style={{ textAlign: "center" }}>¡Vamos a Comenzar! Necesitamos fotos de tu DNI y una selfie.</h2>    
    <div style={{ margin: "15px" }} />
    <Button type="button" handleClick={goNext}>Comenzar</Button>
    <div style={{ margin: "15px" }} />
   </s.Form>
  );
}

export default Step3;
