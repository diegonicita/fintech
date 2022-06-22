import React from "react";
import logo from "../../Assets/logo.png";
import "./Page1.styles.css";

function Page1() {
  return (
    <div className="page1-container">
      {/* <div className="page1-background">Home</div> */}
      <div className="page1-up"></div>
      <img src={logo} alt="logo" />
      <div className="page1-middle">
        <label>
          <input type="number" name="phone" placeholder="Telefono" />
        </label>
        <label>
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          <select name="documento" placeholder="Tipo de Documento">
            <option> DNI </option>
            <option> Pasaporte </option>
            <option> LC </option>
            <option> LE </option>
          </select>
        </label>
        <label>
          <input type="text" name="documento" placeholder="N° de Documento" />
        </label>
        <label className="myCheckbox" htmlFor="myCheckbox">
          <input type="checkbox" name="myCheckbox"/>
          Declaro bajo juramento que toda la informacion consignada en el
          presente formulario es fehaciente y he leido y acepto los terminos de
          la Apertura de la Cuenta Comitente
        </label>
        <button> Proximo Paso </button>
      </div>
      <div className="page1-down"></div>
    </div>
  );
}

export default Page1;
