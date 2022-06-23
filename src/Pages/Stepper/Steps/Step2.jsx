import React from 'react'
import "./Steps.styles.css";
import { useFormik } from "formik";
import validationSchema from "../Formik-yup/validationSchemaStep2";

function Step2({data,updateStep}) {

    const onSubmit = () => {
        sessionStorage.setItem("step2", JSON.stringify({...values}))                
        updateStep(1);
    }; 

    console.log(data);

    const initialValues = {
        aceptacionTerminos2: data?.aceptacionTerminos2 || false,   
      };

    const formik = useFormik({ initialValues, validationSchema, onSubmit, enableReinitialize: true  });
    const { handleSubmit, handleChange, handleBlur, errors, touched, values } = formik;    

  return (
    <form onSubmit={handleSubmit} type="POST">         
          <div className="myCheckbox">
            <label htmlFor="aceptacion">
              <input
                type="checkbox"
                name="aceptacionTerminos2"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.aceptacionTerminos2}
              />
              <div className="terminos">
                Declaro bajo juramento que toda la informacion consignada en el
                presente formulario es fehaciente y he leido y acepto los
                terminos de la Apertura de la Cuenta Comitente
              </div>
            </label>
            {errors.aceptacionTerminos2 && touched.aceptacionTerminos2 ? (
              <div className="error-msg">{errors.aceptacionTerminos2}</div>
            ) : (
              ""
            )}
          </div>
          <button type="submit"> Proximo Paso </button>          
        </form>
  )
}

export default Step2