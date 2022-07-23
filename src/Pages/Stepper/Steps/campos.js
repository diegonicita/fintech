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
    type: "select",
    placeholder: "Género",
    options: [
      { value: "", label: "Género"},
      { value: "1", label: "Masculino" },
      { value: "2", label: "Femenino" },
      { value: "3", label: "Otro" },
    ],
  },
  {
    name: "nacionalidad",
    type: "select",    
    placeholder: "Nacionalidad",
    options: [
      { value: "", label: "Nacionalidad"},
      { value: "1", label: "Argentino" },
      { value: "2", label: "Otro" },      
    ],
  },
  {
    name: "paisDeNacimiento",
    type: "select",    
    placeholder: "País de Nacimiento",
    options: [
      { value: "", label: "Pais de Nacimiento"},
      { value: "1", label: "Argentina" },
      { value: "2", label: "Otro" },      
    ],
  }
  ,
  {
    name: "fechaDeNacimiento",
    label: "Fecha de Nacimiento",
    type: "date",
    placeholder: "Fecha de Nacimiento",
  }
];

export const campos3 = [
  {    
    type: "select",
    name: "pais",
    placeholder: "Pais",  
    options: [
      { value: "", label: "Pais"},
      { value: "1", label: "Argentina" },
      { value: "2", label: "Otro" },      
    ], 
  }
  ,
  {    
    name: "provincia",
    placeholder: "Provincia",
    type: "select",
    options: [
      { value: "", label: "Provincia"},
      { value: "1", label: "CABA" },
      { value: "2", label: "Otra" },      
    ], 
  }
  ,
  {
    label: "Ciudad o Localidad",
    name: "ciudadLocalidad",
    placeholder: "Ciudad o Localidad",
    type: "text"
  }
  ,
  {

    label: "Calle",
    name: "calle",
    placeholder: "calle",
    type: "text"
  }
  ,
  {

    label: "Altura",
    name: "altura",
    placeholder: "altura",
    type: "number"
  }
  ,
  {

    label: "Piso y/o Depto",
    name: "pisoDepto",
    placeholder: "Piso y/o Depto",
    type: "text"
  }
  ,
  {
    label: "Codigo Postal",
    name: "codigoPostal",
    placeholder: "Codigo Postal",
    type: "text"
  }]

  export const campos4 = [
    {      
      label: "¿Cumplís alguna de las siguientes condiciones?",
      type: "checkbox",
      name: "condicionesSOIPEPFATCA",
      placeholder: "None"
    }
  ]

  export const campos5 = [
    {
      label: "cvuvbu",
      type: "text",
      name: "cvucbu",
      placeholder: "cvu/vbu"
    },
    {      
      name: "tipoDeCuenta",
      type: "select",
      placeholder: "Tipo de Cuenta",
      options: [
        { value: "", label: "Tipo de Cuenta" },
        { value: "1", label: "Caja de Ahorro" },       
        { value: "2", label: "Cuenta Corriente" },
      ]
    },
    {      
      name: "moneda",
      type: "select",
      placeholder: "Moneda",
      options: [
        { value: "", label: "Moneda" },
        { value: "ars", label: "ARS" },       
        { value: "usd", label: "USD" },
      ]
    },
    {      
      type: "text",
      name: "entidad",
      placeholder: "Entidad Bancaria",
      label: "Entidad Bancaria"
    },
  ]