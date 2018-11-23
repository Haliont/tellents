import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Skills from '../Skills';
import Search from '../Search';
import PageSwitcher from '../../containers/PageSwitcher';

class Dashboard extends Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard/skills" component={Skills} />
        <Route path="/dashboard/search" component={Search} />
        <Route path="/dashboard" component={PageSwitcher} />
      </Switch>
    );
  }
}

export default Dashboard;
