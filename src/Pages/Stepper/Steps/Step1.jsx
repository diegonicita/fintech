import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step1";
import axios from "axios";
import * as s from "./styles";
import Button from "../../../components/Button/Button";

function Step1({ data, setData, updateStep }) {
  const [apiDataCUILCUIT, setApiDataCUILCUIT] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(
    () => {
      // console.log("useEffect");
      if (isFetching) {
        console.log("axios");
        const url = "https://api-gateway.staging.scala.ly/afip";
        const query = `/ws_sr_padron_a13/getIdPersonaListByDocumento?documento=${values.numeroDeDocumento}`;
        const fullUrl = url + query;
        let tokenStr =
          "ChTec.mnJeDQsJijJVdLZ409HHgcOnY1OnhZr4DgCvhzWebKqGnQX55M";
        axios
          .get(fullUrl, { headers: { Authorization: `Apikey ${tokenStr}` } })
          .then((res) => {
            setApiDataCUILCUIT(res.data.idPersona[0]);
            // console.log(res.data.idPersona[0]);
            setData((previous) => {
              return {
                ...previous,
                cuilcuit: res.data.idPersona[0],
              };
            });
            setIsFetching(false);
            updateStep(2);
          })
          .catch((err) => {
            setIsFetching(false);
            updateStep(2);
          });
      }
    },
    [isFetching],
    updateStep
  );

  const onSubmit = () => {
    setIsFetching(true);
    sessionStorage.setItem("step1", JSON.stringify({ ...values }));
  };

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
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    formik;

  const campos = [
    {
      name: "phone",      
      type: "tel",
      placeholder: "Teléfono",      
    },
    {
      name: "email",      
      type: "email",
      placeholder: "Email",      
    },
    {
      name: "tipoDeDocumento",      
      type: "select",
      placeholder: "Tipo de Documento", 
      options: [
        { value: "", label: "Tipo de documento" },
        { value: "1", label: "DNI" },
        { value: "2", label: "CUIT" },
        { value: "3", label: "CUIL" },
        { value: "4", label: "CDI" },
        { value: "5", label: "LE" },
        { value: "6", label: "LC" },
        { value: "7", label: "CI" },
        { value: "8", label: "Pasaporte" },
        { value: "9", label: "Otro" },           
      ],
    },
    {
      name: "numeroDeDocumento",      
      type: "number",
      placeholder: "Número de Documento",       
    }
  ];

  
  return (
    <s.Form onSubmit={handleSubmit} type="POST">

      {campos.map((campo) => {	
        return (          
            <React.Fragment key={campo.name + new Date().getMilliseconds}>
            <s.Label>
            {campo.type !== "select" && 
            <s.Input
              type={campo.type}
              name={campo.name}
              placeholder={campo.placeholder}                           
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[campo.name]}
              borderError={errors[campo.name] && touched[campo.name]}
            />                        
          }
          {campo.type === "select" &&
            <s.Select
            name={campo.name}            
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[campo.name]}
            borderError={errors[campo.name] && touched[campo.name]}
          >            
            {campo.options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}             
          </s.Select>
          }
            </s.Label>
            {errors[campo.name] && touched[campo.name] && <s.Error>{errors[campo.name]}</s.Error>}
            </React.Fragment>
        );
      }
      )}
      <s.CheckBoxContainer>
        <input
          type="checkbox"
          name="aceptacionTerminos"
          onChange={handleChange}
          onBlur={handleBlur}
          checked={values.aceptacionTerminos}
        />
        <div className="terminos">
          Declaro bajo juramento que toda la informacion consignada en el
          presente formulario es fehaciente y he leido y acepto los terminos de
          la Apertura de la Cuenta Comitente
        </div>
      </s.CheckBoxContainer>
      {errors.aceptacionTerminos && touched.aceptacionTerminos && (
        <s.Error>{errors.aceptacionTerminos}</s.Error>
      )}
      <Button type="submit" disabled={isFetching}>
        <span className="icon" style={{ left: "15%", top: "5%" }}></span>Proximo
        Paso
      </Button>
      {isFetching ? <img className="wait-gif" src="/wait2.gif" /> : ""}
    </s.Form>
  );
}

export default Step1;
