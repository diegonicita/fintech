import React from "react";
import {useNavigate} from "react-router-dom";
import "../Home/Home.styles.css";
import logo from "../../Assets/logo.png";
import CreateAccountComponent from "../../components/CreateAccountBase";

function CreateAccount4() {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/camera?stepId=1", {replace: true});
  }

  const handleUploadFile = () => {
    // navigate("/camera", {replace: true});
  }

  return (

    <CreateAccountComponent 
      logo={logo}
      h1Title="Comencemos con una foto del frente del DNI."
      buttonText="Sacar foto"
      h1Style={{maxWidth: "80%"}}
      divHomeDownStyle={{height: "30vh"}}
      handleClick={handleClick}> 
        <form>          
        </form>
        <button style={{marginTop: "20px"}} onClick={handleUploadFile}>
        <label style={{width: "100%", cursor: "pointer"}}> Subir archivo                    
        <input style={{display: "none"}} type="file"></input>      
        </label>  
        </button>
        {/* <div> Archivo Cargado : ninguno </div> */}
    </CreateAccountComponent>
  
  );
}

export default CreateAccount4;