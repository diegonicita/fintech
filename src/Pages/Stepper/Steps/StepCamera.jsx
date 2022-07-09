import React from "react";
import CameraBase from "../../../components/CameraBase";

function StepCamera({ goNext, numeroFoto }) {
  return (
    <CameraBase goNext={goNext} numeroFoto={numeroFoto}/>
  );
}

export default StepCamera;