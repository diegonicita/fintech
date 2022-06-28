import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../Assets/logo.png";
import "./Stepper.styles.css";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";

function Stepper1() {
  const [data, setData] = useState({});
  const [step, setStep] = useState(1);

  useEffect(() => {
    const step1 = sessionStorage.getItem("step1");
    const step2 = sessionStorage.getItem("step2");
    const step3 = sessionStorage.getItem("step3");
    const step4 = sessionStorage.getItem("step4");
    const step5 = sessionStorage.getItem("step5");    
    setData((prevData) => ({
      ...prevData,
      ...JSON.parse(step1),
      ...JSON.parse(step2),
      ...JSON.parse(step3),
      ...JSON.parse(step4),
      ...JSON.parse(step5),
    }));
  }, [step]);

  const updateStep = (n) => {
    console.log("step " + n);
    setStep(n);
  };

  return (
    <div className="stepper-container">
      <section className="stepper-up"></section>
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <section className="stepper-middle">
        {step === 1 && <Step1 data={data} setData={setData} updateStep={updateStep} />}
        {step === 2 && <Step2 data={data} setData={setData} updateStep={updateStep} />}
        {step === 3 && <Step3 data={data} updateStep={updateStep} />}
        {step === 4 && <Step4 data={data} updateStep={updateStep} />}
        {step === 5 && <Step5 data={data} updateStep={updateStep} />}        
      </section>
      <section className="stepper-down"></section>
    </div>
  );
}

export default Stepper1;
