import React from 'react';
// import PropTypes from 'prop-types';

function SearchForm() {
  return (
    <div className="search-form">
      <form className="my-search-form" role="search">
        <input type="text" className="form-control" placeholder="Search for ..." />
        <div className="search-filter radio-block clearfix">
          <div className="radio">
            <input type="radio" name="home-page-filter" id="jobs-filter-1" defaultValue="jobs-filter" defaultChecked />
            <label htmlFor="jobs-filter-1">
              <span className="radio-text mobile-hide">Jobs</span>
              <span className="radio-text mobile-show">J</span>
            </label>
          </div>
          <div className="radio">
            <input type="radio" name="home-page-filter" id="talents-filter-1" defaultValue="talents-filter" />
            <label htmlFor="talents-filter-1">
              <span className="radio-text mobile-hide">Talents</span>
              <span className="radio-text mobile-show">T</span>
            </label>
          </div>
        </div>
        <a href type="submit" className="btn-search"><i className="icon icon-loupe" /></a>
      </form>
    </div>
  );
}

// SearchForm.propTypes = {
//   someProp: PropTypes.string.isRequired,
// }

// class SearchForm extends Component {
//   static propTypes = {
//     someProp: PropTypes.string.isRequired,
//   }

//   render() {
//     return (
//       <p>SearchForm</p>
//     );
//   }
// }

export default SearchForm;
