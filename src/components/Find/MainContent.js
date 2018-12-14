import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import cn from 'classnames';

import Filters from './Filters';
// import CardsContainer from './CardsContainer';
import RightSidebar from './RightSidebar';

import { Row, Left, Right } from './Grid';
import TalentsList from '../../containers/TalentsList';
import JobsList from '../../containers/JobsList';

export default function MainContent() {
  return (
    <Row className="main-content">
      <Left>
        <Filters />
      </Left>

      <Right
        className={cn('container-fluid job-boxes',
          {
            // 'job-boxes--talents': true,
            'job-boxes--jobs': true,
          })}
      >
        <Row>
          <div className="col-xs-12">
            {/* <CardsContainer /> */}
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
        </Row>
      </Right>
    </Row>
  );
}
