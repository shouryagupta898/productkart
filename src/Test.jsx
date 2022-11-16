import React from "react";
import ForgotPage from "./ForgotPage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function Test() {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <SignUpPage />
      <LoginPage />
      <ForgotPage />
    </div>
  );
}
export default Test;
