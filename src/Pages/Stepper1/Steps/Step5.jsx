import React from 'react'
import "./Steps.styles.css";
import { useFormik } from "formik";
import validationSchema from "../Formik-yup/validationSchemaStep5";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Step5({data, updateStep}) {

  const navigate = useNavigate();

    const onSubmit = () => { 
        console.log("submit 5");
        sessionStorage.setItem("step5", JSON.stringify({...values}));
        handleClick();
    }; 

    const handleClick = () => {
      navigate("/stepper2", {replace: true});
    }

    const initialValues = {
        cvucbu: data.cvucbu || "",
        entidad: data.entidad || "",
        tipoDeCuenta: data.tipoDeCuenta || "",
        moneda: data.moneda || "",        
      };        

    const formik = useFormik({ initialValues, validationSchema, onSubmit, enableReinitialize: true });
    const { handleSubmit, handleChange, handleBlur, errors, touched, values } = formik;       

  return (
    <form onSubmit={handleSubmit} type="POST">
          <h2>Para continuar, agregá una cuenta bancaria</h2>
          <label className="with-margin-top">            
            <input
              type="text"
              name="cvucbu"
              placeholder="cvu/cbu"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cvucbu}
              className={errors.cvucbu && touched.cvucbu && "error"}
              style={{backgroundImage: "url('/coins-solid.svg')"}}
            />
            </label>
            {errors.cvucbu && touched.cvucbu ? (
              <div className="error-msg">{errors.cvucbu}</div>
            ) : (
              ""
            )}          

          <label className="with-margin-top">          
            <select
              name="tipoDeCuenta"
              placeholder="Tipo de Cuenta"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tipoDeCuenta}
              className={errors.tipoDeCuenta && touched.tipoDeCuenta && "error"}
              style={{backgroundImage: "url('/coins-solid.svg')"}}
            >
              <option value="">Tipo de Cuenta</option>
              <option value="cajaDeAhorro"> Caja de Ahorro </option>
              <option value="cuentaCorriente"> Cuenta Corriente </option>
              <option value="otro"> Otro </option>              
            </select>
            </label>
            {errors.tipoDeCuenta && touched.tipoDeCuenta ? (
              <div className="error-msg">{errors.tipoDeCuenta}</div>
            ) : (
              ""
            )}           

          <label className="with-margin-top">          
            <select
              name="moneda"
              placeholder="Moneda"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.moneda}
              className={errors.moneda && touched.moneda && "error"}
              style={{backgroundImage: "url('/dollar-sign-solid.svg')"}}
            >
              <option value="">Moneda</option>
              <option value="ars"> ARS </option>
              <option value="usd"> USD </option>
              <option value="bimonetaria"> Bimonetaria </option>              
            </select>
            </label>
            {errors.moneda && touched.moneda ? (
              <div className="error-msg">{errors.moneda}</div>
            ) : (
              ""
            )}          
          
          <div className='with-margin-top'>Entidad</div>            
          <label>                                
            <input
              type="text"
              name="entidad"
              placeholder="Entidad"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.entidad}
              className={errors.entidad && touched.entidad && "error"}
              style={{backgroundImage: "url('/building-columns-solid.svg')"}}
            />
            </label>      
            {errors.entidad && touched.entidad ? (
              <div className="error-msg">{errors.entidad}</div>
            ) : (
              ""
            )}          
        
          <button type="submit"><span className="icon"style={{left: "21%",top:"5%"}}></span>Continuar</button>
          <Link to="/stepper1" onClick={()=>updateStep(4)}>Volver</Link>
        </form>
  )
}

export default Step5;