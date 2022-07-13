import * as S from "./styles";

const Modal = ({ handleModal, show, children, text: {text1, text2}}) => {  
    return (  
      <S.Modal show={show}>
        <S.ModalMain>
          {children}
          <div style={{textAlign: "center"}}>
          <S.Button name="Reset" onClick={ (e) => {handleModal(e);} }> {text1}</S.Button>
          <S.Button name="Continue" onClick={ (e) => {handleModal(e);} }> {text2} </S.Button>
          </div>
        </S.ModalMain>    
      </S.Modal> 
          );
  };

  export default Modal;