import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import cn from 'classnames';

import Filters from './Filters';
import RightSidebar from './RightSidebar';

import * as Grid from './Grid';
import TalentsList from '../../containers/TalentsList';
import JobsList from '../../containers/JobsList';

export default function MainContent() {
  return (
    <Grid.Row className="main-content">
      <Grid.Left>
        <Filters />
      </Grid.Left>
      <Grid.Right
        className={cn('container-fluid job-boxes',
          {
            // 'job-boxes--talents': true,
            'job-boxes--jobs': true,
          })}
      >

        <Grid.Row>

          <div className="col-xs-12">
            <Switch>
              <Route
                path="/dashboard/find/talent"
                component={TalentsList}
              />
              <Route
                path="/dashboard/find/job"
                component={JobsList}
              />
              <Redirect to="/dashboard/find/job" />
            </Switch>
          </div>

          <RightSidebar />
        </Grid.Row>

      </Grid.Right>
    </Grid.Row>
  );
}
