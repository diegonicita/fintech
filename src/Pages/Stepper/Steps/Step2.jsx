import React from 'react'
import "./Steps.styles.css";
import { useFormik } from "formik";
import validationSchema from "../Formik-yup/validationSchema";

function Step2({formData, setFormData,updateStep}) {

    const onSubmit = () => {        
        setFormData({...formData, 
            phone2: values.phone,
            email2: values.email,
            tipoDeDocumento2: values.tipoDeDocumento,
            numeroDeDocumento2: values.numeroDeDocumento,
            aceptacionTerminos2: values.aceptacionTerminos,
            step: 3
            }
            )        
        sessionStorage.setItem("step2", JSON.stringify({...values}))                
        updateStep(1);
    }; 

    const initialValues = {
        phone: formData.phone2 || "",
        email: formData.email2 || "",
        tipoDeDocumento: formData.tipoDeDocumento2 || "",
        numeroDeDocumento: formData.numeroDeDocumento2 || "",
        aceptacionTerminos: formData.aceptacionTerminos2 || false,   
      };

    const formik = useFormik({ initialValues, validationSchema, onSubmit });
    const { handleSubmit, handleChange, handleBlur, errors, touched, values } = formik;    

  return (
    <form onSubmit={handleSubmit} type="POST">
          <label>
            <h2> Paso 2</h2>
            <input
              type="tel"
              name="phone"
              placeholder="Telefono"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              className={errors.phone && touched.phone && "error"}
            />
            {errors.phone && touched.phone ? (
              <div className="error-msg">{errors.phone}</div>
            ) : (
              ""
            )}
          </label>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email ? (
              <div className="error-msg">{errors.email}</div>
            ) : (
              ""
            )}
          </label>
          <label>
            <select
              name="tipoDeDocumento"
              placeholder="Tipo de Documento"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tipoDeDocumento}
              className={
                errors.tipoDeDocumento && touched.tipoDeDocumento && "error"
              }
            >
              <option value="">Tipo de Documento</option>
              <option value="dni"> DNI </option>
              <option value="passport"> Pasaporte </option>
              <option value="DNI"> LC </option>
              <option value="LE"> LE </option>
            </select>
            {errors.tipoDeDocumento && touched.tipoDeDocumento ? (
              <div className="error-msg">{errors.tipoDeDocumento}</div>
            ) : (
              ""
            )}
          </label>
          <label>
            <input
              type="number"
              name="numeroDeDocumento"
              placeholder="Número de Documento"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.numeroDeDocumento}
              className={
                errors.numeroDeDocumento && touched.numeroDeDocumento && "error"
              }
            />
            {errors.numeroDeDocumento && touched.numeroDeDocumento ? (
              <div className="error-msg">{errors.numeroDeDocumento}</div>
            ) : (
              ""
            )}
          </label>
          <div className="myCheckbox">
            <label htmlFor="aceptacion">
              <input
                type="checkbox"
                name="aceptacionTerminos"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.aceptacionTerminos}
              />
              <div className="terminos">
                Declaro bajo juramento que toda la informacion consignada en el
                presente formulario es fehaciente y he leido y acepto los
                terminos de la Apertura de la Cuenta Comitente
              </div>
            </label>
            {errors.aceptacionTerminos && touched.aceptacionTerminos ? (
              <div className="error-msg">{errors.aceptacionTerminos}</div>
            ) : (
              ""
            )}
          </div>
          <button type="submit"> Proximo Paso </button>
          {/* <div onClick={() => updateStep(1)}> Volver </div> */}
        </form>
  )
}

export default Step2