import React from 'react';
import * as S from "./styles";
import Button from "../Button/Button";

const Modal = ({ context, children }) => {  

    const [showModal, setShowModal] = React.useState(true); 

    const handleModal = (e) => {  
      // Button "Empezar de nuevo" //      
      if (e.target.name === "Reset") {            
        console.log("Reset");
        setShowModal(false); 
        context[1].fnClick();             
      }
      // Button "Continuar" //
      if (e.target.name === "Continue") {
        console.log("Continue");
        setShowModal(false);        
        context[0].fnClick();             
      }
    }      

    return (  
      <S.Modal show={showModal}>
        <S.ModalMain>
          {children}
          <div style={{textAlign: "center"}}>
          <Button name="Reset" handleClick={handleModal}> {context[1].text}</Button>
          <div style={{padding:"5px"}}></div>
          <Button name="Continue" handleClick={handleModal}> {context[0].text} </Button>
          </div>
        </S.ModalMain>    
      </S.Modal> 
          );
  };

  export default Modal;