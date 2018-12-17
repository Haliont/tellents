import React from 'react';
import PropTypes from 'prop-types';

function LikesList({ items }) {
  return (
    <div className="likes flexbox">
      <span className="icon icon-shape" />
      <ul className="likes-list list-unstyled">
        {items.length > 0
          ? items.map(() => (
            <li
              className="like-item like-item--1 bg-cover circul-shape"
            />
          ))
          : <span>No recommendation yet</span>
        }
      </ul>
    </div>
  );
}

LikesList.defaultProps = {
  items: [],
};

LikesList.propTypes = {
  items: PropTypes.instanceOf(Array),
};

export default LikesList;
