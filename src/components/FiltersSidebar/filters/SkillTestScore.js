import React from 'react';
import PropTypes from 'prop-types';
import FilterControl from './FilterControl';

function SkillTestScore({ selectedFilter, onChange }) {
  const controlProps = {
    onChange,
    name: 'skill',
    selectedFilter,
  };

  return (
    <div className="filter-block">
      <div className="filter-title">
        Skill Test Score:
      </div>
      <div className="checkbox-list-block clearfix">
        <FilterControl
          {...controlProps}
          label="Best (5)"
          value="i_5"
        />
        <FilterControl
          {...controlProps}
          label="5-4.6"
          value="i_5_4"
        />
        <FilterControl
          {...controlProps}
          label="4.6-4"
          value="i_4-95"
        />
        <FilterControl
          {...controlProps}
          label="< 4"
          value="l_4"
        />
      </div>
    </div>
  );
}

SkillTestScore.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
};

export default SkillTestScore;
