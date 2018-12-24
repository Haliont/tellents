import React from 'react';
import { Form, Field } from 'react-final-form';

const filters = [['jobs', 'Jobs'], ['talents', 'Talents']];

const renderFilters = () => filters.map(([filterName, text]) => (
  <div key={filterName} className="radio">
    <input
      defaultChecked
      id={`${filterName}-filter`}
      type="radio"
      defaultValue={`${filterName}-filter`}
      name="profile-page-filter"
    />
    <label htmlFor={`${filterName}-filter`}>
      <span className="radio-text">{text}</span>
    </label>
  </div>
));

class SearchForm extends React.Component {
  onSubmit = (values) => {
    const { filterCards, setFilter, searchObject } = this.props;
    setFilter(values);
    filterCards(searchObject);
  }

  render() {
    const { onSubmit } = this;

    return (
      <div className="search-form">
        <Form
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <form
              role="search"
              className="my-search-form"
              onSubmit={handleSubmit}
            >
              <Field
                type="text"
                name="q"
                component="input"
                className="form-control"
                placeholder="Search"
              />
              <div className="search-filter radio-block">
                {renderFilters()}
              </div>
              <button
                type="submit"
                href="javascript:void(0)"
                className="btn-search"
              >
                <i className="icon icon-loupe" />
              </button>
            </form>
          )}
        </Form>
      </div>
    );
  }
}


export default SearchForm;
