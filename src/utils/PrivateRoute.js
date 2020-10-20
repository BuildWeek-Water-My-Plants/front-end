import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} {...rest} />;
        } else {
          return <Redirect to="/Login" />;
        }
      }}
    />
  );
};
export default PrivateRoute;