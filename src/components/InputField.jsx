import React from "react";

function InputField({label, handleChange, handleBlur, errors, touched, values, name, placeholder, type}) {
  return (
    <>{label}
    <label>      
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        className={errors[name] && touched[name] && "error"}
      />
    </label>
      {errors[name] && touched[name] ? (
        <div className="error-msg">{errors[name]}</div>
      ) : (
        ""
      )}    
    </>
  );
}

export default InputField;
