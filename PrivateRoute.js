import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, isAuthenticated, redirectTo, ...rest }) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return <Route {...rest} element={element} />;
};

export default PrivateRoute;
