import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../../Assets/logo.png";

function Step7() {
  const navigate = useNavigate();

  const handleClick = () => {
    const f = async () => {
      console.log("sending data");
      let formData = new FormData();
      formData.set("step1", sessionStorage.getItem("step1"));
      formData.set("step2", sessionStorage.getItem("step2"));
      formData.set("step3", sessionStorage.getItem("step3"));
      let response = await fetch("//localhost:8000/fintech-form-data", {
        method: "POST",        
        body: formData, 
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },                       
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
      }            
    };

    f();
    // navigate("/", { replace: true });
  };

  return (
    <div className="home-container">
      <div className="home-up"></div>
      <img src={logo} alt="logo" />
      <div className="home-middle">
        <h1 style={{ margin: "0", maxWidth: "80%" }}>
          ¡Excelente, ya terminamos!
        </h1>
        <h1 style={{ margin: "0", maxWidth: "80%" }}>
          Pronto nos pondremos en contacto con vos.
        </h1>
      </div>
      <div className="home-down" style={{ height: "25vh" }}>
        <button onClick={handleClick}> Finalizar </button>
      </div>
    </div>
  );
}

export default Step7;
