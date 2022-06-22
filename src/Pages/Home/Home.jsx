import React from "react";
import "./Home.styles.css";
import logo from "../../Assets/logo.png";

function Home() {
  return (
    <div className="home-container">
      {/* <div className="home-background">Home</div> */}
      <div className="home-up"></div>
      <img src={logo} alt="logo"/>
      <div className="home-middle">
        <h1> Abrí tu cuenta en minutos</h1>
        <button> Comenzar </button>
      </div>
      <div className="home-down"></div>
    </div>
  );
}

export default Home;
