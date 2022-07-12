import React from "react";
import {useNavigate} from "react-router-dom";
// import "./Home.styles.css";
import logo from "../../Assets/logo.png";
import * as S from "./Styles";

const Modal = ({ handleClose, show, children, handleReset }) => {  
  return (  
    <S.Modal show={true}>
      <S.ModalMain>
        {children}
        <button style={{width: "130px", margin: "10px", fontSize:"1rem"}} onClick={handleReset}> Empezar de nuevo </button>
        <button style={{width: "130px", margin: "10px", fontSize:"1rem"}} onClick={handleClose}> Continuar </button>
      </S.ModalMain>    
    </S.Modal>  
  );
};

function Home() {

  const [showModal, setShowModal] = React.useState(false); 
  
  const showMyModal = () => {
    setShowModal(true);
  }
  const hideMyModal = () => {
    setShowModal(false);
    goToStepper1();
  }
  const resetData = () => {
    sessionStorage.clear();
    setShowModal(false);
    goToStepper1();
  }

  const goToStepper1 = () => {
    navigate("/stepper1", {replace: true});
  }

  const errors = []; 

  if (sessionStorage.getItem("step1") != null) errors.push("Existe step 1");
  if (sessionStorage.getItem("step2") != null) errors.push("Existe step 2");
  if (sessionStorage.getItem("step3") != null) errors.push("Existe step 3");
  if (sessionStorage.getItem("step4") != null) errors.push("Existe step 4");
  if (sessionStorage.getItem("step5") != null) errors.push("Existe step 5");  
  if (sessionStorage.getItem("imgSrc1") != null) errors.push("Existe img 1");
  if (sessionStorage.getItem("imgSrc2") != null) errors.push("Existe img 2");
  if (sessionStorage.getItem("imgSrc3") != null) errors.push("Existe img3 3");
  
  // console.log(errors);

  const navigate = useNavigate();
  const handleClick = () => {
    if (errors.length > 0) {showMyModal(); return}
    goToStepper1();
  }

  return (
    <S.HomeContainer>      
      <div className="up"></div>
      <S.Image src={logo} alt="logo"/>
      <Modal show={showModal} handleClose={hideMyModal} handleReset={resetData}>
        <h3 style={{textAlign: "center"}}>Tenes una apertura en proceso:</h3>          
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
