import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step1";
import axios from "axios";
import * as s from "./styles";
import {campos1 as campos} from "./campos.js";
import Button from "../../../components/Button/Button";

function Step1({ data, setData, updateStep }) {
  const [apiDataCUILCUIT, setApiDataCUILCUIT] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(
    () => {      
      if (isFetching) {
        console.log("axios");
        const url = process.env.REACT_APP_URL;
        const query = `${process.env.REACT_APP_QUERY}${values.numeroDeDocumento}`;
        const fullUrl = url + query;        
        axios
          .get(fullUrl, { headers: { Authorization: `Apikey ${process.env.REACT_APP_TOKEN}` } })
          .then((res) => {
            setApiDataCUILCUIT(res.data.idPersona[0]);            
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

  function renderSwitch(inputType) {
      switch(inputType) {
        case 'text':          
        case 'number':          
        case 'date':          
          return (
                  <s.Input
                  type={campo.type}
                  name={campo.name}
                  placeholder={campo.placeholder}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[campo.name]}
                  borderError={errors[campo.name] && touched[campo.name]}
                 />
          );
        default:
          return 'foo';
      }
    }

  return (
    <s.Form onSubmit={handleSubmit} type="POST">
      {campos.map((campo) => {
        return (
          <React.Fragment key={campo.name + new Date().getMilliseconds}>
            <s.Label>
              {campo.type !== "select" && campo.type !== "checkbox" && (
                <s.Input
                  type={campo.type}
                  name={campo.name}
                  placeholder={campo.placeholder}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[campo.name]}
                  borderError={errors[campo.name] && touched[campo.name]}
                />
              )}
              {campo.type === "select" && (
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
              )}
              {campo.type === "checkbox" && (
                <s.CheckBoxContainer>
                  <s.CheckBox
                    type={campo.type}
                    name={campo.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values[campo.name]}
                  />
                  <s.Terminos>
                    Declaro bajo juramento que toda la informacion consignada en
                    el presente formulario es fehaciente y he leido y acepto los
                    terminos de la Apertura de la Cuenta Comitente
                  </s.Terminos>
                </s.CheckBoxContainer>
              )}
            </s.Label>
            {errors[campo.name] && touched[campo.name] && (
              <s.Error>{errors[campo.name]}</s.Error>
            )}
          </React.Fragment>
        );
      })}
      <Button type="submit" disabled={isFetching}>
        <span className="icon" style={{ left: "15%", top: "5%" }}></span>Proximo
        Paso
      </Button>
      {isFetching ? <img className="wait-gif" src="/wait2.gif" /> : ""}
    </s.Form>
  );
}

export default Step1;
