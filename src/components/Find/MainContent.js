import React from 'react';
import { Route } from 'react-router-dom';
import cn from 'classnames';

import Filters from './Filters';
// import CardsContainer from './CardsContainer';
import RightSidebar from './RightSidebar';

import { Row, Left, Right } from './Grid';
import TalentsList from '../../containers/TalentsList';

export default function MainContent() {
  return (
    <Row className="main-content">
      <Left>
        <Filters />
      </Left>

      <Right
        className={cn('container-fluid job-boxes',
          {
            'job-boxes--talents': true,
            // 'job-boxes--jobs': props.location.pathname === '/dashboard/find/job',
          })}
      >
        <Row>
          <div className="col-xs-12">
            {/* <CardsContainer /> */}
            <Route
              path="/dashboard/find/talent"
              component={TalentsList}
            />
          </div>
          <RightSidebar />
        </Row>
      </Right>
    </Row>
  );
}
