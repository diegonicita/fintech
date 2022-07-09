import React, { useEffect } from "react";
import { useFormik } from "formik";
import validationSchema from "../validations/step2";
import { Link } from "react-router-dom";
import InputField from "../../../components/InputField";
import axios from "axios";

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
    <form onSubmit={handleSubmit} type="POST">
      <h2
        style={{
          paddingLeft: "45px",
          backgroundImage: "url('/person-solid.svg')",
        }}
      >
        {" "}
        Datos Personales
      </h2>
      <InputField
        label="Primer Nombre"
        name="primerNombre"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        placeholder="Primer Nombre"
        type="text"
      ></InputField>
      <InputField
        label="Segundos Nombres"
        name="segundosNombres"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        placeholder="Segundos Nombres"
        type="text"
      ></InputField>
      <InputField
        label="Apellidos"
        name="apellidos"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        placeholder="Apellidos"
        type="text"
      ></InputField>
      <InputField
        label="Cuil/Cuit"
        name="cuilcuit"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        placeholder="Cuil/Cuit"
        type="text"
      ></InputField>
      <InputField
        label="Genero"
        name="genero"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        placeholder="Género"
        type="text"
      ></InputField>
      <InputField
        label="Nacionalidad"
        name="nacionalidad"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        placeholder="Nacionalidad"
        type="text"
      ></InputField>
      <InputField
        label="Pais Nacimiento"
        name="paisDeNacimiento"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        placeholder="Pais de Nacimiento"
        type="text"
      ></InputField>
      <InputField
        label="Fecha Nacimiento"
        name="fechaDeNacimiento"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        placeholder="Fecha de Nacimiento"
        type="date"
      ></InputField>

      <button type="submit">
        <span className="icon" style={{ left: "15%", top: "5%" }}></span>Proximo
        Paso
      </button>
      <Link to="" onClick={() => updateStep(1)}>
        Volver
      </Link>
    </form>
  );
}

export default Step2;
