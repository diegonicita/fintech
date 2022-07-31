import React from "react";
import CameraBase from "../../../Components/CameraBase/CameraBase";

function StepCamera({ goNext, numeroFoto }) {
  return (
    <CameraBase goNext={goNext} numeroFoto={numeroFoto}/>
  );
}

export default StepCamera;