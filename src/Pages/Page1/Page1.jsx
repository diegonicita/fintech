import React from "react";
import logo from "../../Assets/logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Page1.styles.css";

function Page1() {
  const initialValues = {
    phone: "",
    email: "",
    tipoDeDocumento: "",
    numeroDeDocumento: "",
    aceptacionTerminos: false,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert();
  };

  const required = "* Campo requerido";

  const validationSchema = Yup.object().shape({
    phone: Yup.string().required(required).matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"),
    email: Yup.string().email("El email no es valido").required(required),
    tipoDeDocumento: Yup.string().required(required),
    numeroDeDocumento: Yup.string().required(required),
    aceptacionTerminos: Yup.boolean().oneOf(
      [true],
      "*Campo requerido. Debe aceptar los terminos"
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { handleSubmit, handleChange, handleBlur, errors, touched } = formik;

  return (
    <div className="page1-container">
      {/* <div className="page1-background">Home</div> */}
      <div className="page1-up"></div>
      <img src={logo} alt="logo" />
      <div className="page1-middle">
        <form onSubmit={handleSubmit} type="POST">
          <label>
            <input
              type="tel"
              name="phone"
              placeholder="Telefono"
              onChange={handleChange}
              onBlur={handleBlur}
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
        </form>
      </div>
      <div className="page1-down"></div>
    </div>
  );
}

export default Page1;
