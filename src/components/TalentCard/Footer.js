import React from 'react';

function Footer({ additionalInfo }) {
  return (
    <div className="job-box-footer flexbox justify-space-between">
      <div className="additional-info blue-color">
        {additionalInfo || 'The user has not promoted himself yet'}
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

export default Footer;
