import React from "react";
import * as S from "./styles";

function StepperLine({step}) {

  const pasos = 16;
  const stepWidth = 100 / 16;
  return (
    <S.Wrapper>     
      <S.ProgressBar>
        {Array.from({ length: pasos }, (_, i) => (
        <S.Step totalSteps={stepWidth}
                key={i}
                className={step >= i?"active":""}                
            >{i} </S.Step>
        ))}
    </S.ProgressBar>      
    </S.Wrapper>
  );
}

export default StepperLine;
