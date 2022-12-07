import React from "react";
import { Navigate, Route } from "react-router-dom";

const userRoute = ({ user, ...rest }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Route {...rest} />;
};
export default userRoute;
