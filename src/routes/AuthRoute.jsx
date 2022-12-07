import React from "react";
import { Navigate, Route } from "react-router-dom";

const AuthRoute = ({ user, ...rest }) => {
  if (user) {
    return <Navigate to="/" />;
  }
  return <Route {...rest} />;
};
export default AuthRoute;
