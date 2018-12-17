import React from 'react';
import PropTypes from 'prop-types';

function PreviewFooter({ text }) {
  return (
    <div className="job-box-footer flexbox justify-space-between">
      <div className="additional-info blue-color">
        {text}
      </div>
      <button
        type="button"
        className="btn btn-blue btn-bold"
      >
        Free
      </button>
    </div>
  );
}

PreviewFooter.defaultProps = {
  text: '',
};

PreviewFooter.propTypes = {
  text: PropTypes.string,
};

export default PreviewFooter;
