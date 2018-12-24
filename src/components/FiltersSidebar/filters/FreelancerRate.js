import React from 'react';
import PropTypes from 'prop-types';
import FilterControl from './FilterControl';

function FreelancerRate({ selectedFilter, onChange }) {
  const controlProps = {
    onChange,
    name: 'rate',
    selectedFilter,
  };

  return (
    <div className="filter-block">
      <div className="filter-title">
       Freelancer Rate:
      </div>
      <div className="checkbox-list-block clearfix">
        <FilterControl
          {...controlProps}
          label="Best (5)"
          value="i_5"
        />
        <FilterControl
          {...controlProps}
          label="5-4.8"
          value="i_5_4"
        />
        <FilterControl
          {...controlProps}
          label="4.8-4.5"
          value="i_4-95"
        />
        <FilterControl
          {...controlProps}
          label="< 4.5"
          value="l_4"
        />
      </div>
    </div>
  );
}

FreelancerRate.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
};

export default FreelancerRate;
