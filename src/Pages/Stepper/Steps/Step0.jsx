import React from "react";
import * as s from "./styles";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal.jsx";

function Step0({ data, setData, updateStep }) {
 
  return (
    <>      
        <Modal
          setData={setData}
          context={{
            buttons: [
              { text: "Comenzar de nuevo" },
              { text: "Continuar"},
            ],
            title: "Tenes una apertura en proceso:",
          }}
        />      
      <s.Form type="POST" style={{ marginTop: "25vh" }}>
        <h2 style={{ textAlign: "center" }}>
          Bienvenido a la Fintech Nº 1 de Latinoamerica!
        </h2>        
        <Button
          style={{ fontSize: "1.2rem", width: "14rem" }}
          type="button"
          handleClick={() => {
            updateStep(1);
          }}
        >
          Siguiente
        </Button>
      </s.Form>
    </>
  );
}

export default Step0;
