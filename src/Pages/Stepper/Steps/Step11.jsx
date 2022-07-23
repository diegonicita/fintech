import React from "react";
import * as s from "./styles";
import Button from "../../../components/Button/Button";

function Step5({ goNext }) {
  const handleUploadFile = () => {};

  return (
    <s.Form type="POST">
      <div style={{ margin: "50px" }} />
      <h2 style={{ textAlign: "center" }}>¡Excelente!</h2>
      <h2 style={{ textAlign: "center" }}>
        Ahora continuemos con una foto del dorso del DNI.
      </h2>
      <s.Botonera>
        <div style={{ margin: "10px" }} />
        <Button type="button" handleClick={goNext}>
          Sacar Foto
        </Button>
        <div style={{ margin: "10px" }} />
        <Button type="button" handleClick={handleUploadFile}>
          Subir archivo
        </Button>
        <div style={{ margin: "10px" }} />
      </s.Botonera>
    </s.Form>
  );
}

export default Step5;
