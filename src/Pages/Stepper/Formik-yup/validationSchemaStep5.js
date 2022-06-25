import * as Yup from "yup";

const required = "* Campo requerido";

const validationSchema = Yup.object().shape({    
    cvucbu: Yup.string().matches(/^\d+$/, 'Solo se aceptan numeros').test('len', 'Tiene que tener 22 caracteres', (val) => val?.length === 22).required(required),
    entidad: Yup.string().required(required),
    tipoDeCuenta: Yup.string().required(required),
    moneda: Yup.string().required(required),
  });

export default validationSchema;