import React, { useEffect } from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step2";
import { Link } from "react-router-dom";
import InputField from "../../../components/InputField";
import axios from "axios";
import {campos2 as campos} from "./campos.js";
import * as s from "./styles";
import Button from "../../../components/Button/Button";

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
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    formik; 

  useEffect(() => {    
    console.log("axios");
    const url = "https://api-gateway.staging.scala.ly/afip";
    const query = `/ws_sr_padron_a13/getPersona?idPersona=${data.cuilcuit}`;
    const fullUrl = url + query;
    let tokenStr = "ChTec.mnJeDQsJijJVdLZ409HHgcOnY1OnhZr4DgCvhzWebKqGnQX55M";
    axios
      .get(fullUrl, { headers: { Authorization: `Apikey ${tokenStr}` } })
      .then((res) => {        
        const d = res.data.persona;  
        // console.log(d);
        let nombre = d.nombre;
        let nombres = nombre.split(" ");
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

  return (
    <s.Form onSubmit={handleSubmit} type="POST">
      <h2>Datos Personales</h2>
      {campos.map((campo) => {
        return (
          <React.Fragment key={campo.name + new Date().getMilliseconds}>
            <s.Label>
              {campo.type !== "select" && campo.type !== "checkbox" && (
                <s.Input
                  type={campo.type}
                  name={campo.name}
                  placeholder={campo.placeholder}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[campo.name]}
                  borderError={errors[campo.name] && touched[campo.name]}
                />
              )}
              {campo.type === "select" && (
                <s.Select
                  name={campo.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[campo.name]}
                  borderError={errors[campo.name] && touched[campo.name]}
                >
                  {campo.options.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </s.Select>
              )}
              {campo.type === "checkbox" && (
                <s.CheckBoxContainer>
                  <s.CheckBox
                    type={campo.type}
                    name={campo.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values[campo.name]}
                  />
                  <s.Terminos>
                    Declaro bajo juramento que toda la informacion consignada en
                    el presente formulario es fehaciente y he leido y acepto los
                    terminos de la Apertura de la Cuenta Comitente
                  </s.Terminos>
                </s.CheckBoxContainer>
              )}
            </s.Label>
            {errors[campo.name] && touched[campo.name] && (
              <s.Error>{errors[campo.name]}</s.Error>
            )}
          </React.Fragment>
        );
      })}
     
      <Button type="submit">
        <span className="icon" style={{ left: "15%", top: "5%" }}></span>Proximo
        Paso
      </Button>
      <Link to="" onClick={() => updateStep(1)}>
        Volver
      </Link>
    </s.Form>
  );
}

export default Step2;
