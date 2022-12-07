import React, { useState } from "react";
import LoginPage from "./LoginPage";
import EasyLoginPageWithFormik from "./LoginPageWithFormik";

function Test({ setUser }) {
  return (
    <>
      {/* <LoginPage /> */}
      <EasyLoginPageWithFormik setUser={setUser} />
    </>
  );
}

export default Test;
