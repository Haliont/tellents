import React from 'react';
import PropTypes from 'prop-types';

function Description({ text, skillTags }) {
  return (
    <div className="job-box-deskr">
      <div className="text">
        {text}
      </div>
      <div className="skill-tags-block clearfix">
        {skillTags.map(({ id, name }) => (
          <div key={id} className="skill-tag">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

Description.defaultProps = {
  text: 'Text of this description ',
  skillTags: [],
};

Description.propTypes = {
  text: PropTypes.string,
  skillTags: PropTypes.instanceOf(Array),
};

export default Description;
