import React from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import makeToggleable from '../../../HOC/makeToggleable';
import FilterSelect from '../FilterSelect';

class Languages extends React.PureComponent {
  componentDidMount() {
    const { fetchLanguages } = this.props;
    fetchLanguages();
  }

  render() {
    const {
      languages,
      selectedCount,
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
            <div key={id} className="checkbox-block">
              <Field name="lang" component="input" value={name} type="checkbox" id={`checkbox-5.${id}`} />
              <label htmlFor={`checkbox-5.${id}`}>
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

Languages.defaultProps = {
  selectedCount: 'All',
};

Languages.propTypes = {
  languages: PropTypes.instanceOf(Array).isRequired,
  selectedCount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  fetchLanguages: PropTypes.func.isRequired,
};

export default makeToggleable(Languages);
