import React from "react";
import * as s from "./styles";
import Button from "../../../components/Button/Button";

function Step2({ goNext }) {
  return (
    <>      
      <s.Form type="POST">
        <div style={{ margin: "50px" }} />
        <h2 style={{ textAlign: "center" }}>
          Cuenta fue agregada con éxito.
        </h2>
        <div style={{ margin: "15px" }} />
        <Button style={{fontSize: "1.2rem", width: "14rem"}} type="button" handleClick={goNext}>
          Hacer prueba de vida
        </Button>
        <div style={{ margin: "15px" }} />
      </s.Form>     
    </>
  );
}

export default Step2;
