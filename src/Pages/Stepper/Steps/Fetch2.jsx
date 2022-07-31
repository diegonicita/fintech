import React, { useEffect } from "react";
import axios from "axios";

function Fetch2({ data, setData, updateStep }) {
  console.log("Fetch2 Render");

  const url =
    process.env.REACT_APP_URL +
    `${process.env.REACT_APP_QUERY2}${data.cuilcuit}`;

  const myFetch = () => {
    console.log("Fetch2 Axios Get");
    axios
      .get(url, {
        headers: { Authorization: `Apikey ${process.env.REACT_APP_TOKEN}` },
      })
      .then((res) => {
        let persona = res.data.persona;
        console.log(persona);        
        let names = persona?.nombre?.split(" ");
        let nombre1 = (names !== undefined && names.length > 1)?names[0]:"";
        let nombre2 = (names !== undefined && names.length > 2)?names[1]:"";
        let apellido = persona?.apellido;
        let fecha = persona?.fechaNacimiento?.split("T")[0];	        
        let calle = (persona?.domicilio.length>0) ? persona.domicilio[0].calle:"";
        let altura = (persona?.domicilio.length>0) ? persona?.domicilio[0].numero:"";
        let pisoDepto = (persona?.domicilio.length>0) ? persona?.domicilio[0].piso:"";                        
        let codigoPostal = (persona?.domicilio.length>0) ? persona?.domicilio[0].codigoPostal:"";          
        setData({
          ...data,
          primerNombre: nombre1,
          segundosNombres: nombre2,
          apellidos: apellido,
          fechaDeNacimiento: fecha,
          calle: calle,
          altura: altura,
          pisoDepto: pisoDepto,
          codigoPostal: codigoPostal,
        });          
      })
      .catch((err) => { console.log(err)  })
      .finally(() => {
        updateStep(2);
      });
  };

  useEffect(() => {
    myFetch();
  }, []);

  return (
    <>
      <h2> Leyendo Datos Segunda Parte </h2>
      <img style={{ width: "3rem" }} alt="leyendo datos" src="/wait2.gif" />
    </>
  );
}

export default Fetch2;
