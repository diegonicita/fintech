import React,{useState, useEffect} from "react";
import logo from "../../Assets/logo.png";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import "./Stepper.styles.css";

function Stepper() {

  const [data, setData] = useState({});
  const  [step, setStep] = useState(1);  

  useEffect(() => {
    const step1 = sessionStorage.getItem("step1");
    const step2 = sessionStorage.getItem("step2");    
    setData((prevData) => ({...prevData, ...JSON.parse(step1), ...JSON.parse(step2)}));
    }, [step]);

  const updateStep = (n) => {
    console.log("step " + n);    
    setStep(n);    
  }; 
  
  return (
    <div className="stepper-container">
      <section className="stepper-up"></section>
      <img src={logo} alt="logo" />
      <section className="stepper-middle">
        {(step === 1) && <Step1 data={data} updateStep={updateStep}/>}
        {(step === 2) && <Step2 data={data} updateStep={updateStep}/>}        
      </section>      
      <section className="stepper-down"></section>
    </div>
  );
}

export default Stepper;
