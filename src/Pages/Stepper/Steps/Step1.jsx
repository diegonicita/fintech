import React from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step1";
import { campos1 as campos } from "./campos.js";
import Button from "../../../Components/Button/Button";
import Form from "../../../Components/Form/Form";

function Step1({ data, setData, updateStep }) {

  const onSubmit = () => {
    // get data from storage step //
    const storage = JSON.parse(sessionStorage.getItem("step1"));
    // create an object with new data from inputs //
    const valoresNuevos =
    {
      phone: values.phone,
      email: values.email,
      tipoDeDocumento: values.tipoDeDocumento,
      numeroDeDocumento: values.numeroDeDocumento,
      aceptacionTerminos: values.aceptacionTerminos,
    }
    // if dni dont changed, keep the old data //
    if (storage?.numeroDeDocumento === values.numeroDeDocumento) {
      setData({
        ...data,
        ...valoresNuevos,
      });
      updateStep(2);
    } else {
      // if dni changed, delete the old data //
      setData({
        ...valoresNuevos,
      });
      // dni changed: clear storage //
      sessionStorage.clear();
      // save step1 data in storage //
      sessionStorage.setItem("step1", JSON.stringify({ ...values }));
      // go to next step //
      updateStep("fetch1");
    }
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
  const { values } = formik; 

  return (
    <Form title="Datos Personales" formik={formik} campos={campos}>
      <Button type="submit">Proximo Paso</Button>
    </Form>
 
  );
}

export default Step1;
