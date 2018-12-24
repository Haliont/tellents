import React from 'react';
import JobTalentSwitcher from './JobTalentSwitcher';
import { Row, Left, Right } from './Grid';
import SortSelect from './SortSelect';

export default function JobBoxes({
  searchObject, filterCards, history, resultsCount, filters,
}) {
  return (
    <Row
      className="job-boxes-header"
    >
      <Left>
        <JobTalentSwitcher searchObject={searchObject} history={history} />
      </Left>
      <Right>
        <div className="panel panel-default panel-gray job-boxes-nav">
          <nav className="flexbox justify-flex-end">
            <div className="sort-nav">
              <span className="sort-nav-title">Sort By</span>
              <SortSelect
                selected={filters.sort}
                filterCards={filterCards}
                searchObject={searchObject}
              />
              <span className="sort-result">
                Result:{' '}
                <span className="sort-result-numb">{resultsCount}</span>
              </span>
            </div>
          </nav>
        </div>
      </Right>
    </Row>
  );
}
