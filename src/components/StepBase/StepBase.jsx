import React from "react";
import * as s from "./styles";
import Button from "../Button/Button";

function StepBase({ context, children }) {
  const handleClickButtonBack = (e) => {
    context.updateStep(context.buttons[0].goTo);
  };
  const handleClickButtonSubmit = (e) => {
    e.preventDefault();
    context.updateStep(context.buttons[1].goTo);
  };

  return (
    <s.Form onSubmit={handleClickButtonSubmit} type="POST">
      <h2>{context.title}</h2>
      {children}
      {context.buttons.length > 0 && (
        <s.Botonera>
          <div style={{ margin: "10px" }} />
          {context.buttons[0].title === "Volver" && (
            <>
              <Button handleClick={handleClickButtonBack} type="button">
                {context.buttons[0].title}
              </Button>
              <div style={{ margin: "10px" }} />
            </>
          )}
          <Button type="submit">{context.buttons[1].title}</Button>
          <div style={{ margin: "10px" }} />
        </s.Botonera>
      )}
    </s.Form>
  );
}

export default StepBase;
