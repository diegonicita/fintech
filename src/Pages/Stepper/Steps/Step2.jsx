import React, { useEffect } from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step2";
import { Link } from "react-router-dom";
import axios from "axios";
import {campos2 as campos} from "./campos.js";
import * as s from "./styles";
import Button from "../../../components/Button/Button";
import { renderSwitch as renderSwitchInput } from "./renderSwitch.js";

function Step2({ data, setData, updateStep }) {

  const initialValues = {
    primerNombre: "",
    segundosNombres: "",
    apellidos: "",
    cuilcuit: data?.cuilcuit || "",
    genero: data?.genero || "",
    nacionalidad: data?.nacionalidad || "",
    paisDeNacimiento: data?.paisDeNacimiento || "",
    fechaDeNacimiento: data?.fechaDeNacimiento || "",
  };

  const onSubmit = () => {
    console.log("submit 2");
    sessionStorage.setItem("step2", JSON.stringify({ ...values }));
    updateStep(3);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });
  const { handleSubmit, errors, touched, values } =
    formik; 

  useEffect(() => {    
    const url = process.env.REACT_APP_URL + `${process.env.REACT_APP_QUERY2}${data.cuilcuit}`;
    axios
      .get(url, { headers: { Authorization: `Apikey ${process.env.REACT_APP_TOKEN}` } })
      .then((res) => {        
        const d = res.data.persona;          
        let nombres = res.data.persona.nombre.split(" ");
        formik.setFieldValue("primerNombre", nombres[0] || "", true);
        formik.setFieldValue("segundosNombres", nombres[1] || "", true);       
        formik.setFieldValue("apellidos", d.apellido || "", true);
        let fecha = d.fechaNacimiento;
        let fechaSplit = fecha.split("T");
        formik.setFieldValue("fechaDeNacimiento", fechaSplit[0], true);
        setData({
            ...data,
            calle: d.domicilio[0].calle || "",
            altura: d.domicilio[0].numero || "",
            pisoDepto: (d.domicilio[0]?.piso || "") + (d.domicilio[0]?.oficinaDptoLocal || ""),
            codigoPostal: d.domicilio[0]?.codigoPostal || "",
        }            
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setData]);

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
      <Button type="submit">
        Proximo Paso
      </Button>      
      <Link to="" onClick={() => updateStep(1)}>
        Volver
      </Link>
    </s.Form>
  );
}

export default Step2;
