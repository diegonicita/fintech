import React from 'react'
import "./Steps.styles.css";
import { useFormik } from "formik";
import validationSchema from "../Formik-yup/validationSchemaStep3";
import {Link} from "react-router-dom";
import InputField from '../../../components/InputField';

function Step3({data,updateStep}) {

    const onSubmit = () => {
        console.log("submit 3");        
        sessionStorage.setItem("step3", JSON.stringify({...values}))                
        updateStep(4);
    }; 

    // console.log(data);

    const initialValues = {
        pais: data?.pais || "",   
        provincia: data?.provincia || "",
        ciudadLocalidad: data?.ciudadLocalidad || "",
        calle: data?.calle || "",
        altura: data?.altura || "",
        pisoDepto: data?.pisoDepto || "",
        codigoPostal: data?.codigoPostal || "",        
      };

    const formik = useFormik({ initialValues, validationSchema, onSubmit, enableReinitialize: true  });
    const { handleSubmit, handleChange, handleBlur, errors, touched, values } = formik;    

  return (
    <form onSubmit={handleSubmit} type="POST">   
     <h2 style={{paddingLeft: "45px", backgroundSize: "18px", backgroundImage: "url('/house-solid.svg')"}}>  Dirección </h2>                                
            <InputField
                label="Pais"
                name="pais"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="Pais"
                type="text">
            </InputField> 
            <InputField
                label="Provincia"
                name="provincia"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="Provincia"
                type="text">
            </InputField>
            <InputField
                label="Ciudad o Localidad"
                name="ciudadLocalidad"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="Ciudad o Localidad"
                type="text">
            </InputField>
            <InputField
                label="Calle"
                name="calle"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="calle"
                type="text">
            </InputField>
            <InputField
                label="Altura"
                name="altura"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="altura"
                type="number">
            </InputField>
            <InputField
                label="Piso y/o Depto"
                name="pisoDepto"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="Piso y/o Depto"
                type="text">
            </InputField>
            <InputField
                label="Codigo Postal"
                name="codigoPostal"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="Codigo Postal"
                type="text">
            </InputField>          

          <button type="submit"> Proximo Paso </button>
          <Link to="/stepper" onClick={()=>updateStep(2)}>Volver</Link>
        </form>
  )
}

export default Step3