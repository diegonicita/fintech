import React from "react";
import {useNavigate} from "react-router-dom";
import "./Home.styles.css";
import logo from "../../Assets/logo.png";

const Modal = ({ handleClose, show, children, handleReset }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button style={{margin: "10px"}} onClick={handleReset}> Empezar de nuevo </button>
        <button onClick={handleClose}> Continuar </button>
      </section>
    </div>
  );
};

function Home() {

  const [showModal, setShowModal] = React.useState(false); 
  
  const showMyModal = () => {
    setShowModal(true);
  }
  const hideMyModal = () => {
    setShowModal(false);
    goToStepper();
  }
  const resetData = () => {
    sessionStorage.clear();
    setShowModal(false);
  }

  const goToStepper = () => {
    navigate("/stepper", {replace: true});
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
    goToStepper();
  }

  return (
    <div className="home-container">
      {/* <div className="home-background">Home</div> */}
      <div className="home-up"></div>
      <img src={logo} alt="logo"/>
      <Modal show={showModal} handleClose={hideMyModal} handleReset={resetData}>
          <h2>Tenes una apertura en proceso:</h2>          
      </Modal>
      <div className="home-middle">
        <h1> Abrí tu cuenta en minutos</h1>        
      </div>
      <div className="home-down">
      <button onClick={handleClick}> Comenzar </button>
      </div>
    </div>
  );
}

export default Home;
