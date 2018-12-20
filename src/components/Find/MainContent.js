import React from 'react';
import cn from 'classnames';

import Filters from './Filters';
import RightSidebar from './RightSidebar';

import * as Grid from './Grid';
import TalentsList from '../../containers/TalentsList';
import JobsList from '../../containers/JobsList';

export default function MainContent({ searchObject }) {
  return (
    <Grid.Row className="main-content">
      <Grid.Left>
        <Filters />
      </Grid.Left>
      <Grid.Right
        className={cn(
          'container-fluid job-boxes',
          searchObject === 'talent' && 'job-boxes--talents',
          searchObject === 'job' && 'job-boxes--jobs',
        )}
      >

        <Grid.Row>
          <div className="col-xs-12">
            {searchObject === 'talent'
              ? <TalentsList />
              : <JobsList />}
          </div>

          <RightSidebar />
        </Grid.Row>
      </Grid.Right>
    </Grid.Row>
  );
}
