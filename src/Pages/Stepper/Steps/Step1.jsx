import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step1";
import axios from "axios";
import * as s from "./styles";
import { campos1 as campos } from "./campos.js";
import { renderSwitch as renderSwitchInput } from "./renderSwitch.js";
import Button from "../../../components/Button/Button";
import useAxios from "../../../Hooks/useAxios";

function Step1({ data, setData, updateStep }) {
  
  const [loading, setLoading] = useState(false);
  const [cuil, setCuil] = useState(null);  
  const [url, setURL] = useState(null);

  useEffect(
    () => {      
      const myFetch = () => {        
      if (loading) {          
        axios
          .get(url, { headers: { Authorization: `Apikey ${process.env.REACT_APP_TOKEN}` } })
          .then((res) => {            
            setCuil(res.data.idPersona[0]);
            setLoading(false);
          })
          .catch((err) => {            
            setCuil("");
            setLoading(false);            
          });
      }
    }
    myFetch();
    },
    [loading, url]   
  );

  // si existe un cuil lo guarda en data para el proximo step para buscar mas datos del usuario //
  useEffect(() => {
    if (cuil != null) {
      setData((previous) => {
               return {
                 ...previous,
                 cuilcuit: cuil,
               }});  
     updateStep(2); 
     sessionStorage.clear();      
     sessionStorage.setItem("step1", JSON.stringify({ ...values }));
    } 
  }, [cuil, setData, updateStep]);   

  // Al hacer click en Continuar ... //
  const onSubmit = () => {
    setURL(process.env.REACT_APP_URL + `${process.env.REACT_APP_QUERY1}${values.numeroDeDocumento}`);    
    setLoading(true);    
  };

  // Formik //
  const initialValues = {
    phone: data.phone || "",
    email: data.email || "",
    tipoDeDocumento: data.tipoDeDocumento || "",
    numeroDeDocumento: data.numeroDeDocumento || "",
    aceptacionTerminos: data.aceptacionTerminos || false,
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });
  const { handleSubmit, errors, touched, values } = formik;  

  // Para hacer el Render de los errores en cada campo //
  const renderError = (campo) => {
    return (errors[campo.name] && touched[campo.name] &&
      (<s.Error>{errors[campo.name]}</s.Error>)
    )
  }

  return (
    <s.Form onSubmit={handleSubmit} type="POST">
    <h2>Datos Personales</h2>
      {campos.map((campo) => {
        return (
          <React.Fragment key={campo.name + new Date().getMilliseconds}>
            {renderSwitchInput(campo, formik)}
            {renderError(campo)}
          </React.Fragment>
        );
      })}
      <Button type="submit" disabled={loading}>
        Proximo Paso
      </Button>
      {loading ? <img alt="leyenedo datos" src="/wait2.gif" /> : ""}
    </s.Form>
  );
}

export default Step1;
