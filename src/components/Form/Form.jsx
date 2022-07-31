import React from 'react'
import {renderSwitch} from './renderSwitch';
import * as s from './styles';

function Form({title, formik, campos, children}) {

    // Para hacer el Render de los errores en cada campo //
    const renderError = (campo) => {
    return (
      formik.errors[campo.name] &&
      formik.touched[campo.name] && <s.Error>{formik.errors[campo.name]}</s.Error>
    );
    };

  return (
    <s.Form onSubmit={formik.handleSubmit} type="POST">
    <h2>{title}</h2>
    {campos.map((campo) => {
      return (
        <React.Fragment key={campo.name + new Date().getMilliseconds}>
          {renderSwitch(campo, formik)}
          {renderError(campo)}
        </React.Fragment>
      );
    })}
    {children}
  </s.Form>
  )
}

export default Form