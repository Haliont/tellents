import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Redirect from 'react-router-dom/Redirect';
import YourOffice from '../YourOffice';
import PageSwitcher from '../PageSwitcher';
import Spinner from '../Spinner';

import Find from '../../containers/Find';
import Header from '../../containers/Header';

class Dashboard extends Component {
  render() {
    const { isBusy } = this.props;

    if (isBusy) {
      return <Spinner />;
    }

    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container-fluid">
            <Switch>
              <Route path="/dashboard/your-office" component={YourOffice} />
              <Route path="/dashboard/find/talent" component={Find} />
              <Route path="/dashboard/find/job" component={Find} />
              <Redirect from="/dashboard/find" to="/dashboard/find/talent" />
              <Route component={PageSwitcher} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
