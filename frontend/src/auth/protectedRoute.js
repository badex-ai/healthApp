import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import FullLoad from '../components/fullLoad'
const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <FullLoad />
    })}
    {...args}
  />
);

export default ProtectedRoute