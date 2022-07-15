import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../Assets/logo.png";
import logoSmall from "../../Assets/logo-small.png";

// import "./Stepper.styles.css";
import * as S from "./styles";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import Step7 from "./Steps/Step7";
import Step8 from "./Steps/Step8";
import Step9 from "./Steps/Step9";
import Step11 from "./Steps/Step11";
import Step13 from "./Steps/Step13";
import Step15 from "./Steps/Step15";
import StepCamera from "./Steps/StepCamera";

function StepperUnico() {
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

  function goNext() {
    setStep( previous => previous + 1);
  }

  return (
    <S.Container>
      <section className="up"></section>
      <Link to="/"><S.Image src={logo} alt="logo" /></Link>
      <Link to="/"><S.ImageSmall src={logoSmall} alt="logo"/></Link>
      
      <section className="middle">
        {step === 1 && <Step1 data={data} setData={setData} updateStep={updateStep} />}
        {step === 2 && <Step2 data={data} setData={setData} updateStep={updateStep} />}
        {step === 3 && <Step3 data={data} updateStep={updateStep} />}
        {step === 4 && <Step4 data={data} updateStep={updateStep} />}
        {step === 5 && <Step5 data={data} updateStep={updateStep} />}
        {step === 6 && <Step6 goNext={goNext} time={30} />}
        {step === 7 && <Step7 goNext={goNext} />}
        {step === 8 && <Step8 goNext={goNext} />}
        {step === 9 && <Step9 goNext={goNext} />}
        {step === 10 && <StepCamera goNext={goNext} numeroFoto={1} />}
        {step === 11 && <Step11 goNext={goNext} />} 
        {step === 12 && <StepCamera goNext={goNext} numeroFoto={2} />}
        {step === 13 && <Step13 goNext={goNext} />} 
        {step === 14 && <StepCamera goNext={goNext} numeroFoto={3} />}
        {step === 15 && <Step15 />}        
      </section>
      <section className="down"></section>
    </S.Container>
  );
}

export default StepperUnico;