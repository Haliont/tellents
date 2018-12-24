import React from 'react';
import PropTypes from 'prop-types';
import FilterControl from './FilterControl';

function Experience({ selectedFilter, onChange }) {
  const controlProps = {
    onChange,
    name: 'exp',
    selectedFilter,
  };

  return (
    <div className="filter-block">
      <div className="filter-title">
        Experience:
      </div>
      <div className="checkbox-list-block clearfix">
        <FilterControl
          {...controlProps}
          label="Intern"
          value="intern"
        />
        <FilterControl
          {...controlProps}
          label="Junior"
          value="junior"
        />
        <FilterControl
          {...controlProps}
          label="Senior"
          value="senior"
        />
        <FilterControl
          {...controlProps}
          label="Expert"
          value="expert"
        />
      </div>
    </div>
  );
}

Experience.propTypes = {
  selectedFilter: PropTypes.instanceOf(Array).isRequired,
};

export default Experience;
