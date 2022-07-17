import React from 'react'
import { useFormik } from "formik";
import validationSchema from "../validations/step5";
import { Link } from "react-router-dom";
import { campos5 as campos } from "./campos.js";
import * as s from "./styles";
import Button from "../../../components/Button/Button";
import { renderSwitch as renderSwitchInput } from "./renderSwitch.js";

function Step5({data, updateStep}) {  

    const onSubmit = () => {         
        sessionStorage.setItem("step5", JSON.stringify({...values}));
        updateStep(6);
    }; 
    
    const initialValues = {
        cvucbu: data.cvucbu || "",
        entidad: data.entidad || "",
        tipoDeCuenta: data.tipoDeCuenta || "",
        moneda: data.moneda || "",        
      };        

    const formik = useFormik({ initialValues, validationSchema, onSubmit, enableReinitialize: true });
    const { handleSubmit, errors, touched, values } = formik;       

    const renderError = (campo) => {
      return (errors[campo.name] && touched[campo.name] &&
        (<s.Error>{errors[campo.name]}</s.Error>)
      )
    }

    return (
      <s.Form onSubmit={handleSubmit} type="POST">
          <h2>Para continuar, agregá una cuenta bancaria</h2>
          {campos.map((campo) => {
              return (
                  <React.Fragment key={campo.name + new Date().getMilliseconds}>
                      {renderSwitchInput(campo, formik)}
                      {renderError(campo)}
                  </React.Fragment>
              );
          })}
          <Button type="submit">
              Proximo Paso
          </Button>
          <Link to="" onClick={() => updateStep(4)}>Volver</Link>
      </s.Form>
  )
}

export default Step5;