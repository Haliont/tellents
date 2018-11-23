import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ({
  isLoggedIn, path, component: Component, ...rest
}) {
  return (
    <Route
      {...rest}
      path={path}
      render={props => (isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      ))}
    />
  );
}
