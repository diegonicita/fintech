import React from "react";
import * as S from "./styles";

function Button({ disabled, type, handleClick, name, children, style }) {
  return (
    <S.Button
      disabled={disabled}
      type={type}
      style={style}
      name={name}
      onClick={(e) => {
        if (typeof handleClick === "function") handleClick(e);
      }}
    >
      {children}
    </S.Button>
  );
}

export default Button;
