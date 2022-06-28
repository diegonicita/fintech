import React from "react";
import logo from "../../../Assets/logo.png";

function Step5({ goNext }) { 

  const handleUploadFile = () => {
    // navigate("/camera", {replace: true});
  };

  return (

 <div className="home-container">
  <div className="home-up"></div>
  <img src={logo} alt="logo" />
  <div className="home-middle">
    <h1 style={{ margin: "0", maxWidth: "80%" }}> ¡Excelente!</h1>
    <h1 style={{ margin: "0", maxWidth: "80%" }}>      
      Ahora continuemos con una foto del dorso del DNI.
    </h1>
  </div>
  <div className="home-down" style={{ height: "40vh" }}>
    <button onClick={goNext}> Sacar foto </button>
    <button style={{ marginTop: "20px" }} onClick={handleUploadFile}>     
      Subir archivo
    </button>
  </div>
</div>
);
}

export default Step5;
