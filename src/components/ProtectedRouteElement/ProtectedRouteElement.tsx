import React, { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteElementProps {
  loggedIn: boolean;
  element: FC<any>;
}

const ProtectedRouteElement: FC<ProtectedRouteElementProps> = ({
  loggedIn,
  element: Component,
  ...props
}): ReactElement => {
  return loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/sign-in" replace />
  );
};

export default ProtectedRouteElement;
