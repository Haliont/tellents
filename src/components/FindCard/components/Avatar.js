import React from 'react';
import PropTypes from 'prop-types';

function Avatar({ src, children }) {
  return (
    <div
      className="job-box-photo bg-cover circul-shape"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      {/* <i className="notif" /> */}
      {children}
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Avatar;
