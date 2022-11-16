import React from "react";
import InputFormik from "./InputFormik";
import { Formik, Form } from "formik";
import Button from "./Button";
import * as Yup from "yup";

function LoginPageWithFormik() {
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

  return (
    <div className="border border-black bg-white shadow-md p-4">
      <Formik //Formik is used as a context
        initialValues={initialValues}
        onSubmit={callLoginApi}
        validationSchema={schema}
        validateOnMount={true}
      >
        <Form>
          <h1 className="text-center">LOGIN</h1>
          <div className="flex flex-col items-center space-y-3 mt-3 ">
            <InputFormik
              label="Email address"
              id="email-address"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="email"
              className=""
            />
            <InputFormik
              label="Password"
              id="xyz"
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
        </Form>
      </Formik>
    </div>
  );
}

export default LoginPageWithFormik;
