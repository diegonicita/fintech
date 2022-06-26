import React from "react";

function RadioButtonField({
  label,
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
  name,
  options,
}) {
  return (
    <div className="check-box-field" name={name}>
      <h2 className="step4">{label}</h2>
      {options.map((option, index) => {
        return (
          <div key={"aa"+ index}>
            <input
              type="radio"
              name={name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={option}
              id={name + index}
              className={errors[name] && touched[name] && "error"}
              checked={values==option}
            />
            <label htmlFor={name + index}>
              <h3 style={{margin: "5px"}}>{option}</h3>
            </label>
          </div>
        );
      })}
      {errors[name] && touched[name] ? (
        <div className="error-msg">{errors[name]}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default RadioButtonField;
