import React from 'react'
import "./Steps.styles.css";
import { useFormik } from "formik";
import validationSchema from "../Formik-yup/validationSchemaStep4";
import {Link} from "react-router-dom";
import CheckBoxField from '../../../components/CheckBoxField';

function Step4({data,updateStep}) {

    const onSubmit = () => {
        console.log("submit 4");        
        sessionStorage.setItem("step4", JSON.stringify({...values}))                
        updateStep(1);
    }; 

    // console.log(data);

    const initialValues = {
        condicionesSOIPEPFATCA: data?.condicionesSOIPEPFATCA || "",   
        tributaEnOtroPais: data?.tributaEnOtroPais || "",
        fondosOrigenesLicitos: data?.fondosOrigenesLicitos || "",                
      };

    const formik = useFormik({ initialValues, validationSchema, onSubmit, enableReinitialize: true  });
    const { handleSubmit, handleChange, handleBlur, errors, touched, values } = formik;    

  return (
    <form onSubmit={handleSubmit} type="POST">                    
            <CheckBoxField
                label="¿Cumplis alguna de las siguientes condiciones?"
                name="condicionesSOIPEPFATCA"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="None"
                type="checkbox"
                options={["SOI", "PEP","FATCA", "Ninguna"]}>
            </CheckBoxField> 
            <CheckBoxField
                label="¿Tributas en otro país ademas de Argentina?"
                name="tributaEnOtroPais"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="None"
                type="checkbox"
                options={["Si", "No"]}>
            </CheckBoxField>
            <CheckBoxField
                label="¿Sus fondos provienen de orígenes lícitos?"
                name="fondosOrigenesLicitos"
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                values={values}
                placeholder="None"
                type="checkbox"
                options={["Si", "No"]}>
            </CheckBoxField>
          <button type="submit"> Proximo Paso </button>
          <Link to="/stepper" onClick={()=>updateStep(1)}>Volver</Link>
        </form>
  )
}

export default Step4