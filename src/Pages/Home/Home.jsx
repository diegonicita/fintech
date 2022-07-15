import React from "react";
import {useNavigate} from "react-router-dom";
import Modal from "../../components/Modal/Modal.jsx";
import logo from "../../Assets/logo.png";
import logoSmall from "../../Assets/logo-small.png";
import * as S from "./styles";
import Button from "../../components/Button/Button.jsx";

function Home() {
  
  const navigate = useNavigate(); // hook para navegar entre páginas

  // 
  const goToStepper = () => {
    navigate("/stepper");
  }

  // Check if the user has already started the survey //
  const check = ["step1", "step2", "step3", "step4", "step5", "imgSrc1", "imgSrc2", "imgSrc3"];
  const errors = [];
  for (let i = 0; i < check.length; i++) {
    if (sessionStorage.getItem(check[i]) != null) {
      errors.push("ya existe: " + check[i]);
    }
  }

  test: errors.push("invento");
  
  // Modal Handlers //
  const handleContinue = () => {    
    goToStepper();
  }  

  const handleReset = () => {    
    sessionStorage.clear(); 
    goToStepper();
  }  

  return (
    <S.Container>      
      <div className="up"></div>
      <S.Image src={logo} alt="logo"/>
      <S.ImageSmall src={logoSmall} alt="logo"/>
      {(errors.length > 0) &&
      <Modal context={[{text: "Comenzar de nuevo", fnClick: handleReset}, {text: "Continuar", fnClick: handleContinue}]}>
        <h3 style={{textAlign: "center", maxWidth: "180px", marginTop: "0"}}>Tenes una apertura en proceso:</h3>          
      </Modal>
      }
      <div className="middle">
        <S.Title> Abrí tu cuenta en minutos</S.Title>        
      </div>
      <div className="down">
        <Button handleClick={handleContinue}> Comenzar </Button>
      </div>
    </S.Container>
  );
}

export default Home;
