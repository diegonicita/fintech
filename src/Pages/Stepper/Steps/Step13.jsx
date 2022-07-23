import React from "react";
import * as s from "./styles";
import Button from "../../../components/Button/Button";

function Step6({ goNext }) {
  return (
    <s.Form type="POST">
      <div style={{ margin: "50px" }} />
      <h2 style={{ textAlign: "center" }}>
        Por último, necesitamos que te saques una selfie con DNI en mano.
      </h2>
      <h2 style={{ textAlign: "center" }}>
        Importante: sostené el DNI en frente tuyo.
      </h2>
      <div style={{ margin: "15px" }} />
      <Button type="button" handleClick={goNext}>
        Sacar Foto
      </Button>
      <div style={{ margin: "15px" }} />
    </s.Form>
  );
}

export default Step6;
