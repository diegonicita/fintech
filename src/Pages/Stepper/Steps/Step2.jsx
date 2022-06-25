import React from 'react'
import "./Steps.styles.css";
import { useFormik } from "formik";
import validationSchema from "../Formik-yup/validationSchemaStep2";
import {Link} from "react-router-dom";
import InputField from '../../../components/InputField';

function Step2({data,updateStep}) {

    const onSubmit = () => {
        console.log("submit 2");
        sessionStorage.setItem("step2", JSON.stringify({...values}))                
        updateStep(3);
    }; 

    // console.log(data);

    const initialValues = {
        primerNombre: data?.primerNombre || "",   
        segundosNombres: data?.segundosNombres || "",
        apellidos: data?.apellidos || "",
        cuilcuit: data?.cuilcuit || "",
        genero: data?.genero || "",
        nacionalidad: data?.nacionalidad || "",
        paisDeNacimiento: data?.paisDeNacimiento || "",
        fechaDeNacimiento: data?.fechaDeNacimiento || "",       
      };

    const formik = useFormik({ initialValues, validationSchema, onSubmit, enableReinitialize: true  });
    const { handleSubmit, handleChange, handleBlur, errors, touched, values } = formik;    

  return (
    <form onSubmit={handleSubmit} type="POST">       
     <h2 style={{paddingLeft: "45px", backgroundImage: "url('/person-solid.svg')"}}> Datos Personales</h2>                 
            <InputField
                label="Primer Nombre"
                name="primerNombre"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="Primer Nombre"
                type="text">
            </InputField> 
            <InputField
                label="Segundos Nombres"
                name="segundosNombres"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="Segundos Nombres"
                type="text">
            </InputField>
            <InputField
                label="Apellidos"
                name="apellidos"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="Apellidos"
                type="text">
            </InputField>
            <InputField
                label="Cuil/Cuit"
                name="cuilcuit"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="Cuil/Cuit"
                type="number">
            </InputField>
            <InputField
                label="Genero"
                name="genero"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="genero"
                type="text">
            </InputField>
            <InputField
                label="Nacionalidad"
                name="nacionalidad"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="nacionalidad"
                type="text">
            </InputField>
            <InputField
                label="Pais Nacimiento"
                name="paisDeNacimiento"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="Pais de Nacimiento"
                type="text">
            </InputField>
            <InputField
                label="Fecha Nacimiento"
                name="fechaDeNacimiento"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="Fecha de Nacimiento"
                type="date">
            </InputField>

          <button type="submit"> Proximo Paso </button>
          <Link to="/stepper" onClick={()=>updateStep(1)}>Volver</Link>
        </form>
  )
}

export default Step2