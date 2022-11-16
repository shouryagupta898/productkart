import React from "react";
import ForgotPage from "./ForgotPage";
import LoginPage from "./LoginPage";
import LoginPageWithFormik from "./LoginPageWithFormik";
import SignUpPage from "./SignUpPage";

function Test() {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      {/* <SignUpPage /> */}
      <LoginPage />
      {/* <ForgotPage /> */}
      <LoginPageWithFormik />
    </div>
  );
}
export default Test;
