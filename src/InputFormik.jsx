import { useField } from "formik";
import React from "react";

function InputFormik({ label, id, name, className, ...rest }) {
  const details = useField(name);
  const [data, meta] = details;
  const { value, onBlur, onChange } = data;
  const { error, touched } = meta;
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
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
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

export default InputFormik;
