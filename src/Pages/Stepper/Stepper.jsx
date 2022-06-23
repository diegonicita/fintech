import React,{useState} from "react";
import logo from "../../Assets/logo.png";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import "./Stepper.styles.css";

function Stepper() {

  const  [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    tipoDeDocumento: "",
    numeroDeDocumento: "",
    aceptacionDeTerminos: false,
    phone2: "",
    email2: "",
    tipoDeDocumento2: "",
    numeroDeDocumento2: "",
    aceptacionDeTerminos2: false,
    step: 1,
  }
  );

  const updateStep = (n) => {
    console.log("step " + n);    
    setStep(n);    
  };    

  const onBack = (e) => {
    console.log("back");    
    setStep((step) => step - 1);    
  };   

  return (
    <div className="stepper-container">
      <section className="stepper-up"></section>
      <img src={logo} alt="logo" />
      <section className="stepper-middle">
        {(step === 1) && <Step1 formData={formData} setFormData={setFormData} updateStep={updateStep}/>}
        {(step === 2) && <Step2 formData={formData} setFormData={setFormData} updateStep={updateStep}/>}        
      </section>      
      <section className="stepper-down"></section>
    </div>
  );
}

export default Stepper;
