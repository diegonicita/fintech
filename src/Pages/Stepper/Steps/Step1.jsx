import React from 'react'
import "./Steps.styles.css";
import { useFormik } from "formik";
import validationSchema from "../Formik-yup/validationSchemaStep1";
import {GiSmartphone} from 'react-icons/gi';
import {HiOutlineMail} from "react-icons/hi";
import {FaAddressCard} from 'react-icons/fa';
import { Link } from "react-router-dom";

function Step1({data, updateStep}) {

    const onSubmit = () => { 
        console.log("submit 1");
        sessionStorage.setItem("step1", JSON.stringify({...values}));
        updateStep(2);
    }; 

    const initialValues = {
        phone: data.phone || "",
        email: data.email || "",
        tipoDeDocumento: data.tipoDeDocumento || "",
        numeroDeDocumento: data.numeroDeDocumento || "",
        aceptacionTerminos: data.aceptacionTerminos || false,   
      };        

    const formik = useFormik({ initialValues, validationSchema, onSubmit, enableReinitialize: true });
    const { handleSubmit, handleChange, handleBlur, errors, touched, values } = formik; 
    
    const inputClass = "with-margin-top";
    const inputClassError = "with-margin-top error";

  return (
    <form onSubmit={handleSubmit} type="POST">          
          <label className="with-margin-top">          
            <input
              type="tel"
              name="phone"
              placeholder="Telefono"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              className={errors.phone && touched.phone ? inputClassError : inputClass}
              style={{backgroundImage: "url('/mobile-screen-solid.svg')"}}
            />            
          </label>
          {errors.phone && touched.phone ? (
              <div className="error-msg">{errors.phone}</div>
            ) : (
              ""
            )}
          <label className="with-margin-top">
          {/* <HiOutlineMail /> */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={errors.email && touched.email && "error"}
              style={{backgroundImage: "url('/envelope-regular.svg'"}}
            />           
          </label>
          {errors.email && touched.email ? (
              <div className="error-msg">{errors.email}</div>
            ) : (
              ""
            )}
          <label className="with-margin-top">
          {/* <FaAddressCard/> */}
            <select              
              name="tipoDeDocumento"
              placeholder="Tipo de Documento"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tipoDeDocumento}
              className={
                errors.tipoDeDocumento && touched.tipoDeDocumento && "error"
              }
              style={{backgroundImage: "url('/id-card-regular.svg'"}}
            >
              <option value="" disabled selected>Tipo de Documento</option>
              <option value="dni">DNI</option>
              <option value="passport">Pasaporte</option>
              <option value="DNI">LC</option>
              <option value="LE">LE</option>
            </select>          
          </label>
          {errors.tipoDeDocumento && touched.tipoDeDocumento ? (
              <div className="error-msg">{errors.tipoDeDocumento}</div>
            ) : (
              ""
            )}
          <label className="with-margin-top">
          {/* <FaAddressCard /> */}
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
              style={{backgroundImage: "url('/id-card-regular.svg'"}}
            />            
          </label>
          {errors.numeroDeDocumento && touched.numeroDeDocumento ? (
              <div className="error-msg">{errors.numeroDeDocumento}</div>
            ) : (
              ""
            )}
          <div className="myCheckbox">
            <div>
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
            </div>            
          </div>
          {errors.aceptacionTerminos && touched.aceptacionTerminos ? (
              <div className="error-msg">{errors.aceptacionTerminos}</div>
            ) : (
              ""
            )}
          <button type="submit"> Proximo Paso </button>
          <Link to="/stepper" onClick={()=>updateStep(5)}>Volver</Link>
        </form>
  )
}

export default Step1