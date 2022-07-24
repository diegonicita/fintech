import React from "react";
import * as s from "./styles";
import Button from "../../../components/Button/Button";

function Step0({ updateStep }) {
  return (
    <>      
        <s.Form type="POST" style={{ marginTop: "25vh"}}>        
        <h2 style={{ textAlign: "center" }}>
          Son necesarios algunos datos personales
        </h2>        
        <Button style={{fontSize: "1.2rem", width: "14rem"}} type="button" handleClick={ () => {updateStep(1)}}>
          Siguiente
        </Button>        
      </s.Form>           
    </>
  );
}

export default Step0;