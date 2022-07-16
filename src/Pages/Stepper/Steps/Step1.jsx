import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step1";
import axios from "axios";
import * as s from "./styles";
import { campos1 as campos } from "./campos.js";
import { renderSwitch as renderSwitchInput } from "./renderSwitch.js";
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

  const renderError = (campo) => {
    return (errors[campo.name] && touched[campo.name] &&
      (<s.Error>{errors[campo.name]}</s.Error>)
    )
  }

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
      <Button type="submit" disabled={isFetching}>
        Proximo Paso
      </Button>
      {isFetching ? <img src="/wait2.gif" /> : ""}
    </s.Form>
  );
}

export default Step1;
