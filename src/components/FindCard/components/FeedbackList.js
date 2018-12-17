import React from 'react';
import PropTypes from 'prop-types';

function FeedbackList({ items }) {
  return (
    <>
      {items.length > 0
        ? items.map(() => (
          <div className="feedback-item flexbox">
            <div className="left-col">
              <div className="item-header">
                <div className="item-photo circul-shape bg-cover item-photo--1" />
                <div className="item-name blue-color">Clifford Love</div>
              </div>
              <div className="item-message">
                <span className="job-title">PSD to HTML</span>
                <span className="feedback-text" />
              </div>
            </div>
            <div className="right-col job-box-rate">
              <span className="icon icon-star-full" />
              <span className="rate-result">5.8</span>
            </div>
          </div>
        ))
        : (
          <span className="feedback-item flexbox">
            No feedback yet
          </span>
        )}
    </>
  );
}

FeedbackList.defaultProps = {
  items: [],
};

FeedbackList.propTypes = {
  items: PropTypes.instanceOf(Array),
};

export default FeedbackList;
