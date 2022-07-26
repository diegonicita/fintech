import React from "react";
import * as S from "./styles";

const Modal = ({ context }) => {
  const [showModal, setShowModal] = React.useState(true);

  const handleModal = (e) => {
    // Button "Empezar de nuevo" //
    if (e.target.name === "Reset") {      
      setShowModal(false);
      context.buttons[1].fnClick();
    }
    // Button "Continuar" //
    if (e.target.name === "Continue") {      
      setShowModal(false);
      context.buttons[0].fnClick();
    }
  };

  return (
    <S.Modal show={showModal}>
      <S.ModalMain>
        <h3>{context.title}</h3>
        <div style={{ textAlign: "center" }}>
          <S.ButtonModal name="Reset" handleClick={handleModal}>
            {context.buttons[1].text}
          </S.ButtonModal>
          <div style={{ padding: "5px" }}></div>
          <S.ButtonModal name="Continue" handleClick={handleModal}>
            {context.buttons[0].text}
          </S.ButtonModal>
        </div>
      </S.ModalMain>
    </S.Modal>
  );
};

export default Modal;
