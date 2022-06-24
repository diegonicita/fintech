import React from "react";

function CheckBoxField({
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
    <div className="check-box-field">
      <h2>{label}</h2>
      {options.map( (option, index) => {

        let nameIndex = `${name}${index+1}`;
        
        return (
      <div key={1001 + index}>      
        <input
          type={type}
          name={nameIndex}
          onChange={handleChange}
          onBlur={handleBlur}
          checked={values[nameIndex]}
          className={errors[nameIndex] && touched[nameIndex] && "error"}
        />
        <label htmlFor={nameIndex}><h3>{option}</h3></label>
        {errors[nameIndex] && touched[nameIndex] ? (<div className="error-msg">{errors[nameIndex]}</div>) : ("")}
      </div>)})}
    </div>
  );
}

export default CheckBoxField;
