import React from "react";
import { useField } from "formik";

function FormikHOC(IncomingComponent) {
  return function outgoingComponent({ name, ...rest }) {
    const details = useField(name);
    const [data, meta] = details;
    const { value, onBlur, onChange } = data;
    const { error, touched } = meta;

    let borderClass = " border-gray-900 focus:border-blue-400 ";

    if (touched && error) {
      borderClass = "border-red-500";
    }
    return (
      <IncomingComponent
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        error={error}
        touched={touched}
        name={name}
        {...rest}
      />
    );
  };
}

export default FormikHOC;
