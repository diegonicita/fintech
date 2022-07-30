import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step2";
import { campos2 as campos } from "./campos.js";
import * as s from "./styles";
import Button from "../../../components/Button/Button";
import { renderSwitch as renderSwitchInput } from "./renderSwitch.js";

function Step2({ data, setData, updateStep }) {

  console.log(data);

  // Formik //
  const onSubmit = () => {
    sessionStorage.setItem("step2", JSON.stringify({ ...values }));    
    updateStep(3);
  };

  const initialValues = {
    primerNombre: data?.primerNombre || "",
    segundosNombres: data?.segundosNombres || "",
    apellidos: data?.apellidos || "",
    cuilcuit: data?.cuilcuit || "",
    genero: data?.genero || "",
    nacionalidad: data?.nacionalidad || "",
    paisDeNacimiento: data?.paisDeNacimiento || "",
    fechaDeNacimiento: data?.fechaDeNacimiento || "",
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
      <s.Botonera>
        <div style={{ margin: "15px" }} />
        <Button          
          handleClick={() => updateStep(1)}
          type="button"
        >
          Volver
        </Button>
        <div style={{ margin: "10px" }} />
        <Button type="submit">
          Proximo Paso
        </Button>
        <div style={{margin: "10px"}} />
      </s.Botonera>
      <div style={{ margin: "10px" }} />      
    </s.Form>
  );
}

export default Step2;
