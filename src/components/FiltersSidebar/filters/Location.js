import React from 'react';
import PropTypes from 'prop-types';
import makeToggleable from '../../../HOC/makeToggleable';
import FilterSelect from '../FilterSelect';
import FilterControl from './FilterControl';

class Location extends React.PureComponent {
  componentDidMount() {
    const { fetchCountries } = this.props;
    fetchCountries();
  }

  render() {
    const {
      onChange,
      countries,
      selectedCount,
      selectedFilter,
    } = this.props;

    return (
      <div className="filter-block">
        <div className="filter-title">
          Location:
        </div>
        <FilterSelect
          title={`Country (${selectedCount || 'All'})`}
          items={countries}
          renderItem={({ id, name }) => (
            <FilterControl
              key={id}
              name="loc"
              label={name}
              value={name}
              onChange={onChange}
              selectedFilter={selectedFilter}
            />
          )}
        />
      </div>
    );
  }
}

Location.defaultProps = {
  selectedCount: 'All',
};

Location.propTypes = {
  countries: PropTypes.instanceOf(Array).isRequired,
  selectedCount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
  selectedFilter: PropTypes.instanceOf(Array).isRequired,
  fetchCountries: PropTypes.func.isRequired,
};

export default makeToggleable(Location);
