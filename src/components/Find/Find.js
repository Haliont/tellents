import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import JobBoxes from './JobBoxes';
import MainContent from './MainContent';

function Find({
  username, match, history,
}) {
  const searchObject = match.path.split('/')[3]; // talent || job

  return (
    <div>
      <Header username={username} />
      <JobBoxes searchObject={searchObject} history={history} />
      <MainContent searchObject={searchObject} />
    </div>
  );
}

Find.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Find;
