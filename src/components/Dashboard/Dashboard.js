import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import YourOffice from '../YourOffice';
import Search from '../Search';
import PageSwitcher from '../PageSwitcher';

import Header from '../../containers/Header';

class Dashboard extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container-fluid">
            <Switch>
              <Route path="/dashboard/your-office" component={YourOffice} />
              <Route path="/dashboard/find" component={Search} />
              <Route path="/dashboard" component={PageSwitcher} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
