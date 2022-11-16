import React from "react";

function Input({ label, id, touched, error, className, ...rest }) {
  let borderClass = " border-gray-900 focus:border-blue-400";
  if (error) {
    borderClass = "border-red-500";
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
          "px-4 py-1 border border-gray-900 rounded-md " +
          className +
          " " +
          borderClass
        }
      />
      {touched && error && <div className="text-red-700">{error}</div>}
    </div>
  );
}

export default Input;
