import React from 'react'
import { useFormik } from "formik";
import validationSchema from "../validations/step3";
import { Link } from "react-router-dom";
import { campos3 as campos } from "./campos.js";
import * as s from "./styles";
import Button from "../../../components/Button/Button";
import { renderSwitch as renderSwitchInput } from "./renderSwitch.js";

function Step3({ data, updateStep }) {

    const onSubmit = () => {   
        sessionStorage.setItem("step3", JSON.stringify({ ...values }))
        updateStep(4);
    };   

    const initialValues = {
        pais: data?.pais || "",
        provincia: data?.provincia || "",
        ciudadLocalidad: data?.ciudadLocalidad || "",
        calle: data?.calle || "",
        altura: data?.altura || "",
        pisoDepto: data?.pisoDepto || "",
        codigoPostal: data?.codigoPostal || "",
    };

    const formik = useFormik({ initialValues, validationSchema, onSubmit, enableReinitialize: true });
    const { handleSubmit, errors, touched, values } = formik;

    const renderError = (campo) => {
        return (errors[campo.name] && touched[campo.name] &&
          (<s.Error>{errors[campo.name]}</s.Error>)
        )
      }

    return (
        <s.Form onSubmit={handleSubmit} type="POST">
            <h2>  Dirección </h2>
            {campos.map((campo) => {
                return (
                    <React.Fragment key={campo.name + new Date().getMilliseconds}>
                        {renderSwitchInput(campo, formik)}
                        {renderError(campo)}
                    </React.Fragment>
                );
            })}
            <Button type="submit">
                Proximo Paso
            </Button>
            <Link to="" onClick={() => updateStep(2)}>Volver</Link>
        </s.Form>
    )
}

export default Step3