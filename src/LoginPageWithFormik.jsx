import React from "react";
import Input from "./Input";
import { withFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import FancyInput from "./FancyInput";

function callLoginApi(values) {
  console.log("sending data ", values.email, values.myPassword);
}
const schema = Yup.object().shape({
  email: Yup.string().email(),
  myPassword: Yup.string().min(8),
});
const initialValues = {
  email: "",
  myPassword: "",
};

export function LoginPageWithFormik({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  console.log("value", values, errors);
  return (
    <div className="border border-black bg-white shadow-md p-4 h-80 ">
      {/* <Formik //Formik is used as a context
        initialValues={initialValues}
        onSubmit={callLoginApi}
        validationSchema={schema}
        validateOnMount={true}
      > */}
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">LOGIN</h1>
        <div className="flex flex-col items-center space-y-3 mt-3 ">
          <Input
            values={values.email}
            error={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Email address"
            id="email-address"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="email"
            className=""
          />
          <Input
            values={values.myPassword}
            error={errors.myPassword}
            touched={touched.myPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Password"
            id="pswd"
            name="myPassword"
            type="password"
            required
            autoComplete="current-password"
            placeholder="password"
            className=""
          />
        </div>
        <div className="flex space-x-24 w-20">
          <Button
            type="submit"
            className="self-end mt-4 "
            //   disabled={!isValid}
          >
            Login
          </Button>

          {/* <Button type="button" onClick={resetForm} className="self-end mt-3">
              Reset
            </Button> */}
        </div>
      </form>
      {/* </Formik> */}
    </div>
  );
}

const myHOC = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
});
const EasyLoginPageWithFormik = myHOC(LoginPageWithFormik);
export default EasyLoginPageWithFormik;
