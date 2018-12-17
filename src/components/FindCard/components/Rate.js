import React from 'react';
import PropTypes from 'prop-types';

const stringify = value => value || 'N/A';

function Rate({ rate }) {
  return (
    <div className="job-box-rate">
      <span className="icon icon-star-full" />
      <span className="rate-result">
        {stringify(rate)}
      </span>
    </div>
  );
}

Rate.defaultProps = {
  rate: 0,
};

Rate.propTypes = {
  rate: PropTypes.number,
};

export default Rate;
