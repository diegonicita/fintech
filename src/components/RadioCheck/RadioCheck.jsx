import React from "react";
import * as s from "./styles";

function RadioCheck({
  label,
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
  name,
  type,
  options,
  customError,
}) {

  return (
    <s.Container>
      <s.Title>{label}</s.Title>

      {/* // CheckBox // */}
      
      {type==="checkbox" && options.map((option, index) => {
        let nameIndex = `${name}${index + 1}`;
        return (
          <s.Wrapper key={1001 + index}>
            <s.Input
              type={type}
              id={nameIndex}
              name={nameIndex}
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values[nameIndex]}
              error={errors[nameIndex] && touched[nameIndex]}
            />
            <s.Label htmlFor={nameIndex}>
              <s.TitleLabel>{option}</s.TitleLabel>
            </s.Label>
          </s.Wrapper>
        );
      })}

      {/* // RadioButton // */}

      {type==="radio" && options.map((option, index) => {
        return (
          <s.Wrapper key={1001 + index}>
            <s.Input
              type="radio"
              name={name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={option}
              id={name + index}
              className={errors[name] && touched[name] && "error"}
              checked={values===option}
            />
            <s.Label htmlFor={name + index}>
              <s.TitleLabel>{option}</s.TitleLabel>
            </s.Label>            
          </s.Wrapper>
        );
      })}
      
      {type==="radio" && errors[name] && touched[name] && <s.ErrorMsg>{errors[name]}</s.ErrorMsg>}
      {type==="checkbox" && customError===true && <s.ErrorMsg>Tienes que seleccionar al menos 1 casillero</s.ErrorMsg> }

    </s.Container>
  );
}

export default RadioCheck;
