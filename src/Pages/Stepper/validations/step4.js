import * as Yup from "yup";

const validationSchema = Yup.object().shape({    
    condicionesSOIPEPFATCA4: Yup.boolean(),
    condicionesSOIPEPFATCA1: Yup.boolean(),
    condicionesSOIPEPFATCA2: Yup.boolean(),
    condicionesSOIPEPFATCA3: Yup.boolean(),
    tributaEnOtroPais: Yup.string().oneOf(['Si', 'No'], "Debes seleccionar una opcion (Si/No)"),    
    fondosOrigenesLicitos: Yup.string().oneOf(['Si', 'No'], "Debes seleccionar una opcion (Si/No)"),
  });

export default validationSchema;