import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';

import Home from '../Home';
import PrivateRoute from '../PrivateRoute';

import Dashboard from '../../containers/Dashboard';

class App extends Component {
  render() {
    const { isSignedIn } = this.props;

    return (
      <Router>
        <Fragment>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} isSignedIn={isSignedIn} />
            )}
          />
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            isSignedIn={isSignedIn}
          />
        </Fragment>
      </Router>
    );
  }
}

export default App;
