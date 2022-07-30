import React, { useState, useEffect } from "react";
import axios from "axios";

function Fetch2({ data, setData, updateStep }) {
  console.log("Fetch2");

  const url =
    process.env.REACT_APP_URL +
    `${process.env.REACT_APP_QUERY2}${data.cuilcuit}`;

  const myFetch = () => {
    axios
      .get(url, {
        headers: { Authorization: `Apikey ${process.env.REACT_APP_TOKEN}` },
      })
      .then((res) => {
        let persona = res.data.persona;
        let nombres = persona?.nombre?.split(" ");
        let apellido = persona?.apellido;
        let fechaNacimiento = persona?.fechaNacimiento?.split("T");        
        let calle = persona?.domicilio?.calle;
        let altura = persona?.domicilio?.numero;
        let pisoDepto = persona?.domicilio?.piso;        
        // let oficinaDptoLocal = persona?.domicilio?.oficinaDptoLocal;
        let codigoPostal = persona?.domicilio?.codigoPostal;        
        setData({
          ...data,
          primerNombre: nombres[0] || "",
          segundosNombres: nombres[1] || "",
          apellidos: apellido || "",
          fechaDeNacimiento: fechaNacimiento || "",
          calle: calle || "",
          altura: altura || "",
          pisoDepto: pisoDepto || "",
          codigoPostal: codigoPostal || "",
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
