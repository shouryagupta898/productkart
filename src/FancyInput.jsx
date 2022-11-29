import React from "react";
import FormikHOC from "./FormikHOC";

function FancyInput({ label, id, touched, error, className, ...rest }) {
  //   console.log("touched is ", touched, "error is ", error);
  let borderClass = " border-yellow-400 focus:border-blue-400 ";
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
        {...rest}
        className={
          " px-4 py-1 border-y-4 border-gray-900 rounded-md " +
          borderClass +
          className
        }
      />
      {touched && error && <div className="text-red-700">{error}</div>}
    </div>
  );
}

export const FormikFancyInput = FormikHOC(FancyInput);

export default FancyInput;
