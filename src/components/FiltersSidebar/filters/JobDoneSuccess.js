import React from 'react';
import PropTypes from 'prop-types';
import FilterControl from './FilterControl';

function JobDoneSuccess({ selectedFilter, onChange }) {
  const controlProps = {
    onChange,
    name: 'ds',
    selectedFilter,
  };

  return (
    <div className="filter-block">
      <div className="filter-title">
        Job Done Success:
      </div>
      <div className="checkbox-list-block clearfix">
        <FilterControl
          {...controlProps}
          label="100%"
          value="i_100"
        />
        <FilterControl
          {...controlProps}
          label="> 95%"
          value="m_95"
        />
        <FilterControl
          {...controlProps}
          label="95-85%"
          value="i_85-95"
        />
        <FilterControl
          {...controlProps}
          label="< 85%"
          value="l_85"
        />
      </div>
    </div>
  );
}

JobDoneSuccess.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
};

export default JobDoneSuccess;
