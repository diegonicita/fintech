import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step1";
import axios from "axios";
import * as s from "./styles";
import Button from "../../../components/Button/Button";

function Step1({ data, setData, updateStep }) {
  const [apiDataCUILCUIT, setApiDataCUILCUIT] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(
    () => {
      // console.log("useEffect");
      if (isFetching) {
        console.log("axios");
        const url = "https://api-gateway.staging.scala.ly/afip";
        const query = `/ws_sr_padron_a13/getIdPersonaListByDocumento?documento=${values.numeroDeDocumento}`;
        const fullUrl = url + query;
        let tokenStr =
          "ChTec.mnJeDQsJijJVdLZ409HHgcOnY1OnhZr4DgCvhzWebKqGnQX55M";
        axios
          .get(fullUrl, { headers: { Authorization: `Apikey ${tokenStr}` } })
          .then((res) => {
            setApiDataCUILCUIT(res.data.idPersona[0]);
            // console.log(res.data.idPersona[0]);
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

  const inputClass = "with-margin-top";
  const inputClassError = "with-margin-top error";

  return (
    <s.Form onSubmit={handleSubmit} type="POST">
      <s.Label>
        <s.Input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
          borderError={errors.phone && touched.phone}
        />
      </s.Label>
      {errors.phone && touched.phone && <s.Error>{errors.phone}</s.Error>}

      <s.Label>
        <s.Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          borderError={errors.email && touched.email}
        />
      </s.Label>
      {errors.email && touched.email && <s.Error>{errors.email}</s.Error>}

      <s.Label>
        <s.Select
          name="tipoDeDocumento"
          placeholder="Tipo de Documento"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.tipoDeDocumento}
          borderError={errors.tipoDeDocumento && touched.tipoDeDocumento}
        >
          <option value="" disabled defaultValue="true">
            Tipo de Documento
          </option>
          <option value="dni">DNI</option>
          <option value="passport">Pasaporte</option>
          <option value="DNI">LC</option>
          <option value="LE">LE</option>
        </s.Select>
      </s.Label>
      {errors.tipoDeDocumento && touched.tipoDeDocumento && (
        <s.Error>{errors.tipoDeDocumento}</s.Error>
      )}

      <s.Label>
        <s.Input
          type="number"
          name="numeroDeDocumento"
          placeholder="Número de Documento"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.numeroDeDocumento}
          borderError={errors.numeroDeDocumento && touched.numeroDeDocumento}
        />
      </s.Label>
      {errors.numeroDeDocumento && touched.numeroDeDocumento && (
        <s.Error>{errors.numeroDeDocumento}</s.Error>
      )}
      <s.CheckBoxContainer>
        <input
          type="checkbox"
          name="aceptacionTerminos"
          onChange={handleChange}
          onBlur={handleBlur}
          checked={values.aceptacionTerminos}
        />
        <div className="terminos">
          Declaro bajo juramento que toda la informacion consignada en el
          presente formulario es fehaciente y he leido y acepto los terminos de
          la Apertura de la Cuenta Comitente
        </div>
      </s.CheckBoxContainer>
      {errors.aceptacionTerminos && touched.aceptacionTerminos && (
        <s.Error>{errors.aceptacionTerminos}</s.Error>
      )}
      <Button type="submit" disabled={isFetching}>
        <span className="icon" style={{ left: "15%", top: "5%" }}></span>Proximo
        Paso
      </Button>
      {isFetching ? <img className="wait-gif" src="/wait2.gif" /> : ""}
    </s.Form>
  );
}

export default Step1;
