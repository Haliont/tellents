import React from 'react';
import PropTypes from 'prop-types';

function FilterControl({
  label, name, value, onChange, selectedFilter,
}) {
  const id = `${name}${value}`;
  const checked = selectedFilter === value || selectedFilter.includes(value);

  return (
    <div className="checkbox-block">
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        name={name}
        id={id}
      />
      <label htmlFor={id}>
        <span className="filter-checkbox">
          <span className="icon icon-check-mark" />
        </span>
        <span className="checkbox-text">{label}</span>
      </label>
    </div>
  );
}

FilterControl.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedFilter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Array),
  ]).isRequired,
};

export default FilterControl;
