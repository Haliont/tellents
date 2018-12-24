import React from 'react';
import PropTypes from 'prop-types';
import FilterControl from './FilterControl';

function Availability({ selectedFilter, onChange }) {
  const controlProps = {
    onChange,
    name: 'avl',
    selectedFilter,
  };

  return (
    <div className="filter-block">
      <div className="filter-title">
        Availability:
      </div>
      <div className="checkbox-list-block clearfix">
        <FilterControl
          {...controlProps}
          label="&lt; 20 h"
          value="per_week_10"
        />
        <FilterControl
          {...controlProps}
          label="&gt; 30 h"
          value="per_week_up_to_30"
        />
        <FilterControl
          {...controlProps}
          label="30 h"
          value="per_week_more_than_30"
        />
        <FilterControl
          {...controlProps}
          label="Full-time"
          value="decide_later"
        />
      </div>
    </div>
  );
}

Availability.propTypes = {
  selectedFilter: PropTypes.instanceOf(Array).isRequired,
};

export default Availability;
