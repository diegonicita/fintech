import React from "react";
import * as S from "./styles";

const Modal = ({ context, setData }) => {
  const [showModal, setShowModal] = React.useState(true);
  const [errors, setErrors] = React.useState([]);
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

  React.useEffect(() => {
    let e = [];
    for (let i = 0; i < check.length; i++) {
      if (sessionStorage.getItem(check[i]) != null) {
        e.push(check[i]);
      }
    }
    setErrors(e);
  }, []);  

  const handleReset = () => {     
      setShowModal(false);
      setErrors([]);
      setData({});
      sessionStorage.clear();      
    }
const handleContinue = () => {    
      setShowModal(false); 
      setErrors([]);
    }  

  console.log("Errores: " + errors);

  return (
    <>
    {errors.length > 0 && (
    <S.Modal show={showModal}>
      <S.ModalMain>
        <h3>{context.title}</h3>
        <div style={{ textAlign: "center" }}>
          <S.ButtonModal name="Reset" handleClick={handleReset}>
            {context.buttons[0].text}
          </S.ButtonModal>
          <div style={{ padding: "5px" }}></div>
          <S.ButtonModal name="Continue" handleClick={handleContinue}>
            {context.buttons[1].text}
          </S.ButtonModal>
        </div>
      </S.ModalMain>
    </S.Modal>)}
    </>  
  );
};

export default Modal;
