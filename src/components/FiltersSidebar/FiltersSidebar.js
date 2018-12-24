import React from 'react';
import PropTypes from 'prop-types';

import SkillTestScore from './filters/SkillTestScore';
import JobDoneSuccess from './filters/JobDoneSuccess';
import FreelancerRate from './filters/FreelancerRate';
import Availability from './filters/Availability';
import JobDelivery from './filters/JobDelivery';
import PlaceOfWork from './filters/PlaceOfWork';
import Experience from './filters/Experience';
import Languages from './filters/Languages';
import Proposals from './filters/Proposals';
import Location from './filters/Location';
import Payment from './filters/Payment';
import Posted from './filters/Posted';
import Budget from './filters/Budget';
import Place from './filters/Place';

class FiltersSidebar extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    const {
      searchObject,
      clearFilters,
    } = this.props;

    if (searchObject !== nextProps.searchObject) {
      clearFilters();
    }
  }

  handleSelect = ({ target }) => {
    const { name, value } = target;
    const {
      filterCards, searchObject, filters,
    } = this.props;

    const newValue = filters[name] === value
      ? ''
      : value;

    filterCards({ [name]: newValue }, searchObject);
  };

  handleMultiSelect = ({ target }) => {
    const { name, value } = target;
    const {
      filterCards, searchObject, filters,
    } = this.props;

    const newValues = filters[name].includes(value)
      ? filters[name].filter(v => v !== value)
      : [...filters[name], value];

    filterCards({ [name]: newValues }, searchObject);
  };

  render() {
    const {
      filters,
      languages,
      countries,
      searchObject,
      fetchLanguages,
      fetchCountries,
    } = this.props;

    const isTalents = searchObject === 'talent';
    const isJobs = searchObject === 'job';

    const { handleMultiSelect, handleSelect } = this;

    return (
      <div className="panel panel-default">
        <Experience
          onChange={handleMultiSelect}
          selectedFilter={filters.exp}
        />

        {isTalents && (
          <JobDoneSuccess
            onChange={handleSelect}
            selectedFilter={filters.ds}
          />
        )}

        {isTalents && (
          <SkillTestScore
            onChange={handleSelect}
            selectedFilter={filters.skill}
          />
        )}

        {isTalents && (
          <FreelancerRate
            onChange={handleSelect}
            selectedFilter={filters.rate}
          />
        )}

        {isJobs && (
          <Posted
            onChange={handleSelect}
            selectedFilter={filters.post}
          />
        )}

        {isJobs && (
          <Place />
        )}

        <Location
          countries={countries}
          onChange={handleMultiSelect}
          fetchCountries={fetchCountries}
          selectedFilter={filters.loc}
          selectedCount={filters.loc.length}
        />

        <Languages
          languages={languages}
          onChange={handleMultiSelect}
          fetchLanguages={fetchLanguages}
          selectedFilter={filters.lang}
          selectedCount={filters.lang.length}
        />

        <Availability
          selectedFilter={filters.avl}
          onChange={handleMultiSelect}
        />

        {isJobs && (
          <Payment
            selectedFilter={filters.payment}
            onChange={handleMultiSelect}
            paymentFrom={filters.p_from}
            onSubmit={() => {}}
            paymentTo={filters.p_to}
          />
        )}

        {isJobs && (
          <Budget
            selectedFilter={filters.bud}
            onChange={handleSelect}
          />
        )}

        {isJobs && (
          <Proposals
            selectedFilter={filters.prop}
            onChange={handleSelect}
          />
        )}

        {isJobs && (
          <JobDelivery />
        )}

        {isTalents && (
          <PlaceOfWork
            selectedFilter={filters.place}
            onChange={handleMultiSelect}
          />
        )}
      </div>
    );
  }
}

FiltersSidebar.propTypes = {
  searchObject: PropTypes.oneOf(['talent', 'job']).isRequired,
};

export default FiltersSidebar;
