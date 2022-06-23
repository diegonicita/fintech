import * as Yup from "yup";

const required = "* Campo requerido";

const validationSchema = Yup.object().shape({    
    pais: Yup.string().required(required),
    provincia: Yup.string().required(required),
    ciudadLocalidad: Yup.string().required(required),
    calle: Yup.string().required(required),
    altura: Yup.string().required(required),
    pisoDepto: Yup.string().notRequired(),
    codigoPostal: Yup.string().required(required),
    
  });

export default validationSchema;