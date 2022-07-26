import React from "react";
import * as s from "./styles";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal.jsx";

function Step0({ data, setData, updateStep }) {
  // Check if the user has already started the survey //
  const check = [
    "step1",
    "step2",
    "step3",
    "step4",
    "step5",
    "imgSrc1",
    "imgSrc2",
    "imgSrc3",
  ];
  let errors = [];
  for (let i = 0; i < check.length; i++) {
    if (sessionStorage.getItem(check[i]) != null) {
      errors.push("ya existe: " + check[i]);
    }
  }

  // Modal Handlers //
  const handleContinue = () => {
    errors = [];
  };

  const handleReset = () => {
    errors = [];
    setData({});
    sessionStorage.clear();    
  };

  return (
    <>
      {errors.length > 0 && (
        <Modal
          context={[
            { text: "Comenzar de nuevo", fnClick: handleReset },
            { text: "Continuar", fnClick: handleContinue },
          ]}
        >
          <h3
            style={{ textAlign: "center", maxWidth: "180px", marginTop: "0" }}
          >
            Tenes una apertura en proceso:
          </h3>
        </Modal>
      )}
      <s.Form type="POST" style={{ marginTop: "25vh" }}>
        <h2 style={{ textAlign: "center" }}>
          Bienvenido a la Fintech Nº 1 de Latinoamerica! 
        </h2>
        <h2 style={{ textAlign: "center" }}>
        
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
