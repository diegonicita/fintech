import React from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step5";
import { campos5 as campos } from "./campos.js";
import * as s from "./styles";
import Button from "../../../Components/Button/Button";
import Form from "../../../Components/Form/Form";
import Separador from "../../../Components/Separador/Separador";

function Step5({ data, updateStep }) {
  
  const onSubmit = () => {
    sessionStorage.setItem("step5", JSON.stringify({ ...values }));
    updateStep(6);
  };

  const initialValues = {
    cvucbu: data.cvucbu || "",
    entidad: data.entidad || "",
    tipoDeCuenta: data.tipoDeCuenta || "",
    moneda: data.moneda || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });
  const { values } = formik;  

  return (
    <Form title="Datos Bancarios" formik={formik} onSubmit={onSubmit} campos={campos}>      
      <s.Botonera>
        <Separador />
          <Button handleClick={() => updateStep(4)} type="button">Volver</Button>      
        <Separador />
          <Button type="submit">Proximo Paso</Button>        
        <Separador />
      </s.Botonera>
    </Form>
   
  );
}

export default Step5;
