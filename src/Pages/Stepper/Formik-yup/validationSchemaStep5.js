import * as Yup from "yup";

const validationSchema = Yup.object().shape({    
    cvucbu: Yup.string().required("* Campo requerido"),
    entidad: Yup.string().required("* Campo requerido"),
    tipoDeCuenta: Yup.string().required("* Campo requerido"),
    moneda: Yup.string().required("* Campo requerido"),
  });

export default validationSchema;