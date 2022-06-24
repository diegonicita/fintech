import React from "react";

function RadioButtonField({
  label,
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
  name,  
  type,
  options,
}) {
  return (
    <div className="check-box-field" name={name}>
      <h2>{label}</h2>
      {options.map( (option, index) => {        
        return (
      <div>      
        <input
          type="radio"
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
          className={errors[name] && touched[name] && "error"}
        />
        <label htmlFor={name}><h3>{option}</h3></label>
        {errors[name] && touched[name] ? (<div className="error-msg">{errors[name]}</div>) : ("")}
      </div>)})}
    </div>
  );
}

export default RadioButtonField;