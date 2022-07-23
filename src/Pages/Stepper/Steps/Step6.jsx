import React from "react";
import Progressbar from "../../../components/Progressbar";

function Step1({goNext, time}) {
  return (
    <>      
        <div style={{ margin: "50px" }} />
        <div className="home-middle">
          <h1>
            Estamos guardando la información, por favor aguarde
          </h1>
        </div>       
      <Progressbar goNext={goNext} time={time}/>       
      
    </>
  );
}

export default Step1;
