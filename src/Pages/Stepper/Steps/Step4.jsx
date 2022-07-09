import React from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step4";
import { Link } from "react-router-dom";
import CheckBoxField from "../../../components/CheckBoxField";
import RadioButtonField from "../../../components/RadioButtonField";

function Step4({ data, updateStep }) {
  const onSubmit = () => {
    console.log("submit 4");
    sessionStorage.setItem("step4", JSON.stringify({ ...values }));
    updateStep(5);
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

  return (
    <form onSubmit={handleSubmit} type="POST">
      <CheckBoxField
        label="¿Cumplís alguna de las siguientes condiciones?"
        name="condicionesSOIPEPFATCA"
        handleChange={handleChangeCheckBoxs}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        placeholder="None"
        type="checkbox"
        options={["SOI", "PEP", "FATCA", "Ninguna"]}
      ></CheckBoxField>
      <div style={{ fontSize: "0.8rem", color: "gray", fontWeight: "800" }}>
        ¿No estás seguro?
        <Link
          style={{ fontSize: "0.8rem", color: "#1488E9", fontWeight: "800" }}
          to="/"
        >
          {" "}
          Ver más informacion
        </Link>
      </div>
      <RadioButtonField
        label="¿Tributás en otro país además de Argentina?"
        name="tributaEnOtroPais"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values.tributaEnOtroPais}
        options={["Si", "No"]}
      ></RadioButtonField>
      <RadioButtonField
        label="¿Sus fondos provienen de orígenes lícitos?"
        name="fondosOrigenesLicitos"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values.fondosOrigenesLicitos}
        options={["Si", "No"]}
      ></RadioButtonField>

      <button type="submit">
        <span className="icon" style={{ left: "15%", top: "5%" }}></span>Proximo
        Paso
      </button>
      <Link to="" onClick={() => updateStep(3)}>
        Volver
      </Link>
    </form>
  );
}

export default Step4;
