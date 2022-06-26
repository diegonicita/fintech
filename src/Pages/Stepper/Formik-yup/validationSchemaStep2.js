import * as Yup from "yup";

const required = "* Campo requerido";

const validationSchema = Yup.object().shape({    
    primerNombre: Yup.string().required(required),
    segundosNombres: Yup.string(),
    apellidos: Yup.string().required(required),
    cuilcuit: Yup.string().matches(/^\d+$/, 'Solo se aceptan numeros').test('len', 'Tiene que tener 11 caracteres', (val) => val?.length === 11).required(required),
    genero: Yup.string().notRequired(),
    nacionalidad: Yup.string().required(required),
    paisDeNacimiento: Yup.string().required(required),
    fechaDeNacimiento: Yup.string().required(required),
  });

export default validationSchema;