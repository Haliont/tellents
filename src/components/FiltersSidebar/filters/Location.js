import React from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import makeToggleable from '../../../HOC/makeToggleable';
import FilterSelect from '../FilterSelect';

class Location extends React.PureComponent {
  componentDidMount() {
    const { fetchCountries } = this.props;
    fetchCountries();
  }

  render() {
    const {
      countries,
      selectedCount,
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
            <div key={id} className="checkbox-block">
              <Field name="loc" component="input" value={name} type="checkbox" id={`checkbox-15.${id}`} />
              <label htmlFor={`checkbox-15.${id}`}>
                <span className="filter-checkbox">
                  <span className="icon icon-check-mark" />
                </span>
                <span className="checkbox-text">{name}</span>
              </label>
            </div>
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
  fetchCountries: PropTypes.func.isRequired,
};

export default makeToggleable(Location);
