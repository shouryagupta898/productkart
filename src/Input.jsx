import React from "react";
import FormikHOC from "./FormikHOC";

function Input({ label, id, touched, error, className, name, ...rest }) {
  // console.log("touched is ", touched, "error is ", error);
  let borderClass = " border-black focus:border-blue-400 ";

  if (touched && error) {
    borderClass = " border-red-500 ";
  }
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        {...rest}
        className={
          " px-4 py-1 border border-gray-900 rounded-md  " +
          borderClass +
          className
        }
      />
      {touched && error && <div className="text-red-700">{error}</div>}
    </div>
  );
}

export const FormikInput = FormikHOC(Input);

export default Input;
