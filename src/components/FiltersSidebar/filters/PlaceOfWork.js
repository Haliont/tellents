import React from 'react';
import PropTypes from 'prop-types';
import FilterControl from './FilterControl';

function PlaceOfWork({ selectedFilter, onChange }) {
  const controlProps = {
    onChange,
    name: 'place',
    selectedFilter,
  };

  return (
    <div className="filter-block">
      <div className="filter-title">
        Proposals:
      </div>
      <div className="checkbox-list-block clearfix">
        <FilterControl
          {...controlProps}
          label="On-Line"
          value="online"
        />
        <FilterControl
          {...controlProps}
          label="On-Site"
          value="onsite"
        />
      </div>
    </div>
  );
}

PlaceOfWork.propTypes = {
  selectedFilter: PropTypes.instanceOf(Array).isRequired,
};

export default PlaceOfWork;
