import React, { useState } from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step4";
import RadioCheck from "../../../Components/RadioCheck/RadioCheck";
import * as s from "./styles";
import Button from "../../../Components/Button/Button";
import Separador from "../../../Components/Separador/Separador";

function Step4({ data, updateStep }) {
  const [checkBoxError, setCheckBoxError] = useState(false);

  const onSubmit = () => {
    let flag = [
      values.condicionesSOIPEPFATCA1,
      values.condicionesSOIPEPFATCA2,
      values.condicionesSOIPEPFATCA3,
      values.condicionesSOIPEPFATCA4,
    ].some((x) => x === true);
    if (flag) {
      sessionStorage.setItem("step4", JSON.stringify({ ...values }));
      updateStep(5);
    } else {
      setCheckBoxError(true);
    }
  };

  const initialValues = {
    condicionesSOIPEPFATCA1: data?.condicionesSOIPEPFATCA1 || false,
    condicionesSOIPEPFATCA2: data?.condicionesSOIPEPFATCA2 || false,
    condicionesSOIPEPFATCA3: data?.condicionesSOIPEPFATCA3 || false,
    condicionesSOIPEPFATCA4: data?.condicionesSOIPEPFATCA4 || false,
    tributaEnOtroPais: data?.tributaEnOtroPais || false,
    fondosOrigenesLicitos: data?.fondosOrigenesLicitos || false,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const handleChangeCheckBoxs = (e) => {
    setCheckBoxError(false);
    setFieldValue(e.target.name, e.target.checked);
    if (
      e.target.name === "condicionesSOIPEPFATCA4" &&
      e.target.checked === true
    ) {
      setFieldValue("condicionesSOIPEPFATCA1", false);
      setFieldValue("condicionesSOIPEPFATCA2", false);
      setFieldValue("condicionesSOIPEPFATCA3", false);
    }

    if (
      e.target.name !== "condicionesSOIPEPFATCA4" &&
      e.target.checked === true
    ) {
      setFieldValue("condicionesSOIPEPFATCA4", false);
    }
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
  } = formik;

  const commonAtr = {
    handleBlur: handleBlur,
    errors: errors,
    touched: touched,
    values: values,
    placeholder: "None",
  };

  return (
    <form onSubmit={handleSubmit} type="POST" style={{ marginTop: "2rem" }}>
      <RadioCheck
        label="¿Cumplís alguna de las siguientes condiciones?"
        name="condicionesSOIPEPFATCA"
        handleChange={handleChangeCheckBoxs}
        {...commonAtr}
        type="checkbox"
        options={["SOI", "PEP", "FATCA", "Ninguna"]}
        customError={checkBoxError}
      ></RadioCheck>
      <s.MoreInformation>
        ¿No estás seguro?
        <s.Enlace to="/">Ver más informacion</s.Enlace>
      </s.MoreInformation>

      <RadioCheck
        label="¿Tributás en otro país además de Argentina?"
        name="tributaEnOtroPais"
        values={values.tributaEnOtroPais}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        type="radio"
        options={["Si", "No"]}
      ></RadioCheck>

      <RadioCheck
        label="¿Sus fondos provienen de orígenes lícitos?"
        name="fondosOrigenesLicitos"
        values={values.fondosOrigenesLicitos}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        type="radio"
        options={["Si", "No"]}
      ></RadioCheck>

      <s.Botonera>
        <Separador />
        <Button handleClick={() => updateStep(3)} type="button">
          Volver
        </Button>
        <Separador />
        <Button type="submit">Proximo Paso</Button>
        <Separador />
      </s.Botonera>
    </form>
  );
}

export default Step4;
