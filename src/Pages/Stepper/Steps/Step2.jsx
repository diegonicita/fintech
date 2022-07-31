import React from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step2";
import { campos2 as campos } from "./campos.js";
import Button from "../../../Components/Button/Button";
import Form from "../../../Components/Form/Form";
import Separador from "../../../Components/Separador/Separador";
import * as s from "./styles";

function Step2({ data, setData, updateStep }) {
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
  const { values } = formik;

  return (
    <Form title="Datos Personales" formik={formik} campos={campos}>
      <s.Botonera>
        <Separador />
        <Button handleClick={() => updateStep(1)} type="button">
          Volver
        </Button>
        <Separador />
        <Button type="submit">Proximo Paso</Button>
        <Separador />
      </s.Botonera>
      <Separador />
    </Form>
  );
}

export default Step2;
