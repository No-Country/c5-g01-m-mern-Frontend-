import { ErrorMessage, useField } from "formik";
import React from "react";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
        style={{backgroundColor:'#D9D9D9',borderRadius:'0',width:'45%',height:'54px'}}
      />
      <div style={{backgroundColor:'#ff000083',color:'red',borderLeft:'4px solid red',width:'45%'}}><ErrorMessage component="div" name={field.name} className="error" /></div>
    </div>
  );
};
export default TextField;
