import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';

import Home from './Home';
import PrivateRoute from './PrivateRoute';


class App extends Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <Router>
        <Fragment>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} isLoggedIn={isLoggedIn} />
            )}
          />
          <PrivateRoute isLoggedIn={isLoggedIn} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
