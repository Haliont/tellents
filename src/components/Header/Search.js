import React from 'react';

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

function Search() {
  return (
    <div className="search-form">
      <form className="my-search-form" role="search">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="search-filter radio-block">
          {renderFilters()}
        </div>
        <a href="javascript:void(0)" type="submit" className="btn-search">
          <i className="icon icon-loupe" />
        </a>
      </form>
    </div>
  );
}

export default Search;
