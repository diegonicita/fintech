import * as Yup from "yup";

const required = "* Campo requerido";

const validationSchema = Yup.object().shape({    
    pais: Yup.string().required(required),
    provincia: Yup.string().required(required),
    ciudadLocalidad: Yup.string().required(required),
    calle: Yup.string().required(required),
    altura: Yup.number().positive().label('Altura').min(1).integer().required(required),
    pisoDepto: Yup.string().notRequired(),
    codigoPostal: Yup.string().matches(/^\d+$/, 'Solo se aceptan numeros').test('len', 'Tiene que tener 4 caracteres', (val) => val?.length === 4).required(required),
    
  });

export default validationSchema;