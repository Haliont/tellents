import React from 'react';
import PropTypes from 'prop-types';
import FilterControl from './FilterControl';

function Posted({ selectedFilter, onChange }) {
  const controlProps = {
    onChange,
    name: 'post',
    selectedFilter,
  };

  return (
    <div className="filter-block">
      <div className="filter-title">
        Posted:
      </div>
      <div className="checkbox-list-block clearfix">
        <FilterControl
          {...controlProps}
          label="24h"
          value="i24"
        />
        <FilterControl
          {...controlProps}
          label="1w"
          value="i3d"
        />
        <FilterControl
          {...controlProps}
          label="3d"
          value="i1w"
        />
        <FilterControl
          {...controlProps}
          label="&gt; 1 W"
          value="m_1w"
        />
      </div>
    </div>
  );
}

Posted.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
};

export default Posted;
