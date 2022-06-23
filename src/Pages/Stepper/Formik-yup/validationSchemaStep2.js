import * as Yup from "yup";

const required = "* Campo requerido";

const validationSchema = Yup.object().shape({    
    primerNombre: Yup.string().required(required),
    segundosNombres: Yup.string().required(required),
    apellidos: Yup.string().required(required),
    cuilcuit: Yup.string().required(required),
    genero: Yup.string().required(required),
    nacionalidad: Yup.string().required(required),
    paisDeNacimiento: Yup.string().required(required),
    fechaDeNacimiento: Yup.string().required(required),
  });

export default validationSchema;