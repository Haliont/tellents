import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Skills from '../Skills';
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
              <Route path="/dashboard/skills" component={Skills} />
              <Route path="/dashboard/search" component={Search} />
              <Route path="/dashboard" component={PageSwitcher} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
