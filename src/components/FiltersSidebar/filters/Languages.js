import React from 'react';
import PropTypes from 'prop-types';
import makeToggleable from '../../../HOC/makeToggleable';
import FilterSelect from '../FilterSelect';
import FilterControl from './FilterControl';

class Languages extends React.PureComponent {
  componentDidMount() {
    const { fetchLanguages } = this.props;
    fetchLanguages();
  }

  render() {
    const {
      onChange,
      languages,
      selectedCount,
      selectedFilter,
    } = this.props;

    return (
      <div className="filter-block">
        <div className="filter-title">
          Languages:
        </div>
        <FilterSelect
          title={`Languages (${selectedCount || 'All'})`}
          items={languages}
          renderItem={({ language_id: id, name }) => (
            <FilterControl
              key={id}
              name="lang"
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

Languages.defaultProps = {
  selectedCount: 'All',
};

Languages.propTypes = {
  languages: PropTypes.instanceOf(Array).isRequired,
  selectedCount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
  selectedFilter: PropTypes.instanceOf(Array).isRequired,
  fetchLanguages: PropTypes.func.isRequired,
};

export default makeToggleable(Languages);
