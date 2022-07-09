import React from "react";
import logo from "../../../Assets/logo.png";

function Step6({ goNext }) { 

  return ( <div className="home-container">
  <div className="home-up"></div>
  <img src={logo} alt="logo" />
  <div className="home-middle">
    <h1 style={{ margin: "0", maxWidth: "80%" }}>¡Excelente!</h1>
    <h1 style={{ margin: "0", maxWidth: "80%" }}>
      Por último, necesitamos que te saques una selfie con DNI en mano.
    </h1>
    <h1 style={{ margin: "0", maxWidth: "80%", color: "red" }}>     
      Importante: sostené el DNI en frente tuyo.
    </h1>
  </div>
  <div className="home-down" style={{ height: "30vh" }}>
    <button onClick={goNext}> Sacar foto </button>
  </div>
</div>
);
}

export default Step6;
