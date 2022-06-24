import React from "react";
import {useNavigate} from "react-router-dom";
import "./Home.styles.css";
import logo from "../../Assets/logo.png";

function Home() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/stepper", {replace: true});
  }

  return (
    <div className="home-container">
      {/* <div className="home-background">Home</div> */}
      <div className="home-up"></div>
      <img src={logo} alt="logo"/>
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
