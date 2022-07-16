export const campos1 = [
    {
      name: "phone",
      type: "tel",
      placeholder: "Teléfono",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      name: "tipoDeDocumento",
      type: "select",
      placeholder: "Tipo de Documento",
      options: [
        { value: "", label: "Tipo de documento" },
        { value: "1", label: "DNI" },
        { value: "2", label: "CUIT" },
        { value: "3", label: "CUIL" },
        { value: "4", label: "CDI" },
        { value: "5", label: "LE" },
        { value: "6", label: "LC" },
        { value: "7", label: "CI" },
        { value: "8", label: "Pasaporte" },
        { value: "9", label: "Otro" },
      ],
    },
    {
      name: "numeroDeDocumento",
      type: "number",
      placeholder: "Número de Documento",
    },
    {
      name: "aceptacionTerminos",
      type: "checkbox",
      placeholder: "Aceptación de Terminos",
    },
  ];

  export const campos2 = [
    {
      name: "primerNombre",
      label: "Primer Nombre",
      type: "text",
      placeholder: "Primer Nombre",      
    },
    {
      name: "segundosNombres",
      label: "Segundos Nombres",
      type: "text",
      placeholder: "Segundos Nombres",      
    },
    {
      name: "apellidos",
      label: "Apellidos",
      type: "text",
      placeholder: "Apellidos",      
    },
    {
      name: "cuilcuit",
      label: "CUIL/CUIT",
      type: "text",
      placeholder: "CUIL/CUIT",      
    },
    {
      name: "genero",
      label: "Género",
      type: "text",
      placeholder: "Género",      
    },
    {
      name: "nacionalidad",
      label: "Nacionalidad",
      type: "text",
      placeholder: "Nacionalidad",     
    },
    {
      name: "paisDeNacimiento",
      label: "País de Nacimiento",
      type: "text",
      placeholder: "País de Nacimiento",     
    }
    ,
    {
      name: "fechaDeNacimiento",
      label: "Fecha de Nacimiento",
      type: "date",
      placeholder: "Fecha de Nacimiento",      
    }
  ]; 