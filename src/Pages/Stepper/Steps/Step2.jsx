import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step2";
import axios from "axios";
import { campos2 as campos } from "./campos.js";
import * as s from "./styles";
import Button from "../../../components/Button/Button";
import { renderSwitch as renderSwitchInput } from "./renderSwitch.js";

function Step2({ data, setData, updateStep }) {
  const [loading, setLoading] = useState({ value: true, cuil: data.cuilcuit });
  const [stepData, setStepData] = useState(null);

  const oldcuilcuit = JSON.parse(sessionStorage.getItem("cuilcuit"));

  // Fetch the data from the API using CUIL/CUIT from previous Step //
  // Save the result in stepData //
  useEffect(() => {
    if (loading.value === true) {
      if (oldcuilcuit !== loading.cuil) {
        console.log("myFetch in Step 2");
        const fetchData = () => {
          const url =
            process.env.REACT_APP_URL +
            `${process.env.REACT_APP_QUERY2}${loading.cuil}`;
          axios
            .get(url, {
              headers: {
                Authorization: `Apikey ${process.env.REACT_APP_TOKEN}`,
              },
            })
            .then((res) => {
              setStepData(res.data);
              setLoading((previous) => {
                return { ...previous, value: false };
              });
            })
            .catch((err) => {
              setLoading((previous) => {
                return { ...previous, value: false };
              });
            });
        };
        fetchData();
      } else {
        console.log(false);
        setLoading((previous) => {
          return { ...previous, value: false };
        });
      }
    }
  }, [loading, setStepData]);

  // Procesa y almacena los datos del formulario //
  useEffect(() => {
    const processData = () => {
      let persona = stepData.persona;

      if (persona != null) {
        if (persona.nombre != null) {
          let nombres = persona.nombre.split(" ");
          if (nombres !== undefined) {
            formik.setFieldValue("primerNombre", nombres[0] || "", true);
            formik.setFieldValue("segundosNombres", nombres[1] || "", true);
          }
        }
      }
      if (persona.apellido !== undefined) {
        formik.setFieldValue("apellidos", persona.apellido || "", true);
      }
      if (persona.fechaNacimiento !== undefined) {
        let fecha = persona.fechaNacimiento;
        let fechaSplit = fecha.split("T");
        formik.setFieldValue("fechaDeNacimiento", fechaSplit[0], true);
      }
      let calle,
        altura,
        pisoDepto,
        codigoPostal = "";
      if (persona.domicilio.length !== 0) {
        calle = persona.domicilio[0].calle;
        altura = persona.domicilio[0].numero;
        if (persona.domicilio[0].piso) pisoDepto = persona.domicilio[0].piso;
        if (persona.domicilio[0].oficinaDptoLocal)
          pisoDepto = " " + persona.domicilio[0].oficinaDptoLocal;
        codigoPostal = persona.domicilio[0].codigoPostal;
      }
      setData({
        ...data,
        calle: calle || "",
        altura: altura || "",
        pisoDepto: pisoDepto || "",
        codigoPostal: codigoPostal || "",
      });
    };
    if (stepData != null) processData();
  }, [stepData]);

  // Formik //
  const onSubmit = () => {
    sessionStorage.setItem("step2", JSON.stringify({ ...values }));
    sessionStorage.setItem("cuilcuit", JSON.stringify(data.cuilcuit));
    updateStep(3);
  };

  const initialValues = {
    primerNombre: data?.primerNombre || "",
    segundosNombres: data?.segundosNombres || "",
    apellidos: data?.apellidos || "",
    cuilcuit: loading?.cuil || "",
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
          disabled={loading.value}
          handleClick={() => updateStep(1)}
          type="button"
        >
          Volver
        </Button>
        <div style={{ margin: "10px" }} />
        <Button disabled={loading.value} type="submit">
          Proximo Paso
        </Button>
        <div style={{margin: "10px"}} />
      </s.Botonera>
      <div style={{ margin: "10px" }} />
      {loading.value && (
        <img style={{ width: "3rem" }} alt="leyendo datos" src="/wait2.gif" />
      )}
    </s.Form>
  );
}

export default Step2;
