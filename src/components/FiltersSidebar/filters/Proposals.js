import React from 'react';
import PropTypes from 'prop-types';
import FilterControl from './FilterControl';

function Proposals({ selectedFilter, onChange }) {
  const controlProps = {
    onChange,
    name: 'prop',
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
          label="0 - 5"
          value="i0_5"
        />
        <FilterControl
          {...controlProps}
          label="5 - 10"
          value="i5_10"
        />
        <FilterControl
          {...controlProps}
          label="10 - 20"
          value="i10_20"
        />
        <FilterControl
          {...controlProps}
          label="&gt;20"
          value="m_20"
        />
        <FilterControl
          {...controlProps}
          label="None"
          value="undefined"
        />
      </div>
    </div>
  );
}

Proposals.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
};

export default Proposals;
