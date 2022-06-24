import * as Yup from "yup";

const validationSchema = Yup.object().shape({    
    condicionesSOIPEPFATCA1: Yup.boolean(),
    condicionesSOIPEPFATCA2: Yup.boolean(),
    condicionesSOIPEPFATCA3: Yup.boolean(),
    condicionesSOIPEPFATCA4: Yup.boolean(),
    tributaEnOtroPais1: Yup.boolean(),
    tributaEnOtroPais2: Yup.boolean(),
    fondosOrigenesLicitos1: Yup.boolean(),
    fondosOrigenesLicitos2: Yup.boolean(),
  });

export default validationSchema;