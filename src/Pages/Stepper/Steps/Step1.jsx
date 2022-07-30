import React from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step1";
import axios from "axios";
import * as s from "./styles";
import { campos1 as campos } from "./campos.js";
import { renderSwitch as renderSwitchInput } from "./renderSwitch.js";
import Button from "../../../components/Button/Button";

function Step1({ data, setData, updateStep }) {

  const onSubmit = () => {    
    setData({
      ...data,
      phone: values.phone,
      email: values.email,
      tipoDeDocumento: values.tipoDeDocumento,
      numeroDeDocumento: values.numeroDeDocumento,
      aceptacionTerminos: values.aceptacionTerminos,
    });
    sessionStorage.setItem("step1", JSON.stringify({ ...values }));
    updateStep("fetch1");
  }

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
    return (
      errors[campo.name] &&
      touched[campo.name] && <s.Error>{errors[campo.name]}</s.Error>
    );
  };

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
      <Button type="submit">
        Proximo Paso
      </Button>      
    </s.Form>
  );
}

export default Step1;
