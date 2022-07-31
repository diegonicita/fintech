import React from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step1";
import { campos1 as campos } from "./campos.js";
import Button from "../../../components/Button/Button";
import Form from "../../../components/Form/Form";

function Step1({ data, setData, updateStep }) {

  const onSubmit = () => {
    const storage = JSON.parse(sessionStorage.getItem("step1"));
    if (storage?.numeroDeDocumento === values.numeroDeDocumento) {
      setData({
        ...data,
        phone: values.phone,
        email: values.email,
        tipoDeDocumento: values.tipoDeDocumento,
        numeroDeDocumento: values.numeroDeDocumento,
        aceptacionTerminos: values.aceptacionTerminos,
      });
      updateStep(2);
    } else {
      setData({
        phone: values.phone,
        email: values.email,
        tipoDeDocumento: values.tipoDeDocumento,
        numeroDeDocumento: values.numeroDeDocumento,
        aceptacionTerminos: values.aceptacionTerminos,
      });
      sessionStorage.clear();
      sessionStorage.setItem("step1", JSON.stringify({ ...values }));
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
