import React from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step3";
import { campos3 as campos } from "./campos.js";
import * as s from "./styles";
import Button from "../../../Components/Button/Button";
import Form from "../../../Components/Form/Form";
import Separador from "../../../Components/Separador/Separador";

function Step3({ data, updateStep }) {
  const onSubmit = () => {
    sessionStorage.setItem("step3", JSON.stringify({ ...values }));
    updateStep(4);
  };

  const initialValues = {
    pais: data?.pais || "",
    provincia: data?.provincia || "",
    ciudadLocalidad: data?.ciudadLocalidad || "",
    calle: data?.calle || "",
    altura: data?.altura || "",
    pisoDepto: data?.pisoDepto || "",
    codigoPostal: data?.codigoPostal || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });
  const { values } = formik;  

  return (
    <Form title="Direccion" formik={formik} onSubmit={onSubmit} campos={campos}>      
      <s.Botonera>
        <Separador />
        <Button handleClick={() => updateStep(2)} type="button">Volver</Button>      
        <Separador />
        <Button type="submit">Proximo Paso</Button>        
        <Separador />
      </s.Botonera>
    </Form>
  );
}

export default Step3;
