import React from 'react';
import PropTypes from 'prop-types';

function HelloBlock({ username }) {
  return (
    <div className="hello-header">
      <div className="blue-color hello-header-name">
        <span className="user-name">Hi {username}</span>,
      </div>
      <div className="hello-header-text">What are you looking for today?</div>
    </div>
  );
}

HelloBlock.defaultProps = {
  username: 'Anonimus 228',
};

HelloBlock.propTypes = {
  username: PropTypes.string,
};

export default HelloBlock;
