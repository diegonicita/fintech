import React, { useState} from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import Step7 from "./Steps/Step7";
import StepCamera from "./Steps/StepCamera";

function Stepper2() {
  const [step, setStep] = useState(1);  

  function goNext() {
    setStep( previous => previous + 1);
  }

  return (
    <>
      {step === 1 && <Step1 goNext={goNext} time={30} />}
      {step === 2 && <Step2 goNext={goNext} />}
      {step === 3 && <Step3 goNext={goNext} />}
      {step === 4 && <Step4 goNext={goNext} />}
      {step === 5 && <StepCamera goNext={goNext} numeroFoto={1} />}
      {step === 6 && <Step5 goNext={goNext} />} 
      {step === 7 && <StepCamera goNext={goNext} numeroFoto={2} />}
      {step === 8 && <Step6 goNext={goNext} />} 
      {step === 9 && <StepCamera goNext={goNext} numeroFoto={3} />}
      {step === 10 && <Step7 />} 
    </>
  );
}

export default Stepper2;

