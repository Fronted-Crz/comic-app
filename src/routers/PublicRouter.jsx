import React from 'react';
import PropTypes from 'prop-types';

import { Route, Navigate } from 'react-router-dom';

export const PublicRoute = ({ isAuthenticated, element: Element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={(props) =>
        !isAuthenticated ? <Element {...props} /> : <Navigate to="/" />
      }
    />
  );
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
