import * as Yup from "yup";

const required = "* Campo requerido";

const validationSchema = Yup.object().shape({
    phone: Yup.string().required(required).matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"),
    email: Yup.string().email("El email no es valido").required(required),
    tipoDeDocumento: Yup.string().required(required),
    numeroDeDocumento: Yup.number().label('ID card').integer().positive().min(1000).required(required),
    aceptacionTerminos: Yup.boolean().oneOf(
      [true],
      "*Campo requerido. Debe aceptar los terminos"
    ),    
  });

    export default validationSchema;