import React from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

import Header from './Header';
import JobBoxes from './JobBoxes';
import MainContent from './MainContent';

function Find({ username }) {
  return (
    <div>
      <Header username={username} />
      <JobBoxes />
      <MainContent />
    </div>
  );
}

Find.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Find;
