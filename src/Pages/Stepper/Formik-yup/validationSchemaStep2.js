import * as Yup from "yup";

const required = "* Campo requerido";

const validationSchema = Yup.object().shape({    
    aceptacionTerminos2: Yup.boolean().oneOf(
      [true],
      "*Campo requerido. Debe aceptar los terminos"
    ),    
  });

export default validationSchema;