import React from "react";
import {useNavigate} from "react-router-dom";
import Modal from "../../components/Modal/Modal.jsx";
import logo from "../../Assets/logo.png";
import * as S from "./styles";

function Home() {

  const [showModal, setShowModal] = React.useState(false); 
  
  const handleModal = (e) => {        
    if (e.target.name == "Reset") {
      sessionStorage.clear();    
      setShowModal(false);      
    }
    if (e.target.name == "Continue") {
      setShowModal(false);
    }
  }  

  const goToStepper1 = () => {
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
  
  errors.push("false error");

  const navigate = useNavigate();  
  const handleClick = () => {
    if (errors.length > 0) {setShowModal(true); return}
    // goToStepper1();
  }  

  return (
    <S.HomeContainer>      
      <div className="up"></div>
      <S.Image src={logo} alt="logo"/>
      <Modal show={showModal} handleModal={handleModal} text={{text1: "Comenzar de nuevo", text2: "Continuar"}}>
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
