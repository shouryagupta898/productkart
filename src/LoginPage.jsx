import React from "react";
import Input from "./Input";
import { useFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";

function LoginPage() {
  function callLoginApi(values) {
    console.log("sending data ", values.email, values.myPassword);
  }
  const schema = Yup.object().shape({
    email: Yup.string().email(),
    myPassword: Yup.string().min(8),
  });
  const {
    handleSubmit,
    values,
    handleBlur,
    handleChange,
    resetForm,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      myPassword: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
    validateOnMount: true,
  });
  return (
    <div className="border border-black bg-white shadow-md p-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">LOGIN</h1>
        <div className="flex flex-col items-center space-y-3 mt-3 ">
          <Input
            label="Email address"
            id="email-address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="email"
            touched={touched.email}
            error={errors.email}
            className=""
          />
          <Input
            label="Password"
            id="xyz"
            value={values.myPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            name="myPassword"
            type="password"
            required
            autoComplete="current-password"
            placeholder="password"
            touched={touched.myPassword}
            error={errors.myPassword}
            className=""
          />
        </div>
        <div className="flex space-x-24 w-20">
          <Button type="submit" className="self-end mt-4 " disabled={!isValid}>
            Login
          </Button>

          <Button type="button" onClick={resetForm} className="self-end mt-3">
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
