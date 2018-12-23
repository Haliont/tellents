import React from 'react';
import { Form } from 'react-final-form';
import PropTypes from 'prop-types';
import AutoSave from './AutoSave';

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

import { setQueryString } from '../../utils';

class FiltersSidebar extends React.PureComponent {
  onSave = (values) => {
    setQueryString(values);
  };

  render() {
    const { onSave } = this;

    const {
      languages,
      countries,
      searchObject,
      fetchLanguages,
      fetchCountries,
    } = this.props;

    const isTalents = searchObject === 'talent';
    const isJobs = searchObject === 'job';

    return (
      <Form
        // initialValues={}
        onSubmit={onSave /* dont use, but is required */}
      >
        {({ values }) => (
          <div className="panel panel-default">
            <AutoSave onSave={onSave} />
            <Experience />

            {isJobs && <JobDoneSuccess />}
            {isJobs && <SkillTestScore />}
            {isJobs && <FreelancerRate />}

            {isTalents && <Posted />}
            {isTalents && <Place />}

            <Location
              countries={countries}
              fetchCountries={fetchCountries}
              selectedCount={(values.loc || {}).length}
            />
            <Languages
              languages={languages}
              fetchLanguages={fetchLanguages}
              selectedCount={(values.lang || {}).length}
            />
            <Availability />

            {isTalents && <Payment />}
            {isTalents && <Budget />}
            {isTalents && <Proposals />}
            {isTalents && <JobDelivery />}

            {isJobs && <PlaceOfWork />}
          </div>
        )}
      </Form>
    );
  }
}

FiltersSidebar.propTypes = {
  searchObject: PropTypes.oneOf(['talent', 'job']).isRequired,
};

export default FiltersSidebar;
