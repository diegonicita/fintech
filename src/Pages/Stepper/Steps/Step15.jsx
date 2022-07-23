import React from "react";
import * as s from "./styles";
import Button from "../../../components/Button/Button";

function Step7() {
  const handleClick = () => {
    const f = async () => {
      console.log("Client: Sending Data to Server");
      let formData = new FormData();
      formData.append("img1", sessionStorage.getItem("imgSrc1"));
      formData.append("img2", sessionStorage.getItem("imgSrc2"));
      formData.append("img3", sessionStorage.getItem("imgSrc3"));
      let response = await fetch("//localhost:8000/fintech-form-data", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (response.ok) {
        let result = await response.json();
        console.log(result);
      }
    };

    f();
  };

  return (
    <s.Form type="POST">
      <div style={{ margin: "50px" }} />
      <h2 style={{ textAlign: "center" }}>¡Excelente, ya terminamos!</h2>
      <h2 style={{ textAlign: "center" }}>
        ¡Pronto nos pondremos en contacto con vos.
      </h2>
      <div style={{ margin: "15px" }} />
      <Button type="button">Finalizar</Button>
      <div style={{ margin: "15px" }} />
    </s.Form>
  );
}

export default Step7;
