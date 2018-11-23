import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Skills from '../Skills';
import Search from '../Search';
import PageSwitcher from '../PageSwitcher';

const Private = () => (
  <Switch>
    <Route path="/private/skills" component={Skills} />
    <Route path="/private/search" component={Search} />
    <Route path="/private" component={PageSwitcher} />
  </Switch>
);

export default function ({ isLoggedIn }) {
  return (
    <Route
      path="/private"
      render={props => (isLoggedIn ? (
        <Private {...props} />
      ) : (
        <Redirect to="/" />
      ))}
    />
  );
}
