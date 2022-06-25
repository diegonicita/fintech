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
        style={{paddingLeft: "15px"}}
        // style={{backgroundImage: "url('/mobile-screen-solid.svg')"}}
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
