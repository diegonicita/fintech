import React from "react";
import {useNavigate} from "react-router-dom";
import Modal from "../../components/Modal/Modal.jsx";
import logo from "../../Assets/logo.png";
import logoSmall from "../../Assets/logo-small.png";
import * as S from "./styles";

function Home() {

  const [showModal, setShowModal] = React.useState(false); 
  const navigate = useNavigate();  
  
  const handleModal = (e) => {  
    // Button "Empezar de nuevo" //      
    if (e.target.name === "Reset") {
      sessionStorage.clear();    
      setShowModal(false);      
      goToStepper();
    }
    // Button "Continuar" //
    if (e.target.name === "Continue") {
      setShowModal(false);
      goToStepper();
    }
  }  

  const goToStepper = () => {
    navigate("/stepper");
  }

  // Check if the user has already started the survey //
  const check = ["step1", "step2", "step3", "step4", "step5", "imgSrc1", "imgSrc2", "imgSrc3"];
  const errors = [];
  for (let i = 0; i < check.length; i++) {
    if (sessionStorage.getItem(check[i]) != null) {
      errors.push("existe ya: " + check[i]);
    }
  }

   errors.push("invento");
  // Navigate to the stepper if the survey is empty //
  // if there are errors show the modal //    
  const handleClick = () => {
    if (errors.length > 0) {setShowModal(true); return}
    goToStepper();
  }  

  return (
    <S.HomeContainer>      
      <div className="up"></div>
      <S.Image src={logo} alt="logo"/>
      <S.ImageSmall src={logoSmall} alt="logo"/>
      <Modal show={showModal} handleModal={handleModal} text={{text1: "Comenzar de nuevo", text2: "Continuar"}}>
        <h3 style={{textAlign: "center", maxWidth: "180px"}}>Tenes una apertura en proceso:</h3>          
      </Modal>
      <div className="middle">
        <S.Title> Abrí tu cuenta en minutos</S.Title>        
      </div>
      <div className="down">
        <S.Button onClick={handleClick}> Comenzar </S.Button>
      </div>
    </S.HomeContainer>
  );
}

export default Home;
