import React, { useEffect } from "react";
import axios from "axios";

function Fetch1({ data, setData, updateStep }) {
  
  console.log("Fetch1 Render");

  const url =
    process.env.REACT_APP_URL +
    `${process.env.REACT_APP_QUERY1}${data.numeroDeDocumento}`;

  const myFetch = () => {

    console.log("Fetch1 Axios Get");

    axios
      .get(url, {
        headers: { Authorization: `Apikey ${process.env.REACT_APP_TOKEN}` },
      })
      .then((res) => {
        setData((previous) => {
          return {
            ...previous,
            cuilcuit: res.data.idPersona[0],
          };
        });
        sessionStorage.setItem("url", JSON.stringify(url));
      })
      .catch((err) => {
        setData((previous) => {
          return {
            ...previous,
            cuilcuit: "",
          };
        });
      })
      .finally(() => {
        updateStep("fetch2");        
      });
  };

  useEffect(() => {
    setTimeout(() => myFetch(), 1000);
  }, []);

  return (
    <>
      <h2> Leyendo Datos Primera Parte</h2>
      <img style={{ width: "3rem" }} alt="leyendo datos" src="/wait2.gif" />
    </>
  );
}

export default Fetch1;
