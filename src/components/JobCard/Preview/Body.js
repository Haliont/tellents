import React from 'react';
import PropTypes from 'prop-types';
import FindCard from '../../FindCard';

function Body({
  tips, description, skillTags,
}) {
  return (
    <FindCard.PreviewBody>
      <FindCard.TipsList
        items={tips}
        className="flexbox justify-space-between"
      />
      <FindCard.Description
        text={description || 'No Introduction set yet'}
        skillTags={skillTags}
      />
    </FindCard.PreviewBody>
  );
}


Body.defaultProps = {
  description: '',
};

Body.propTypes = {
  tips: PropTypes.instanceOf(Array).isRequired,
  skillTags: PropTypes.instanceOf(Array).isRequired,
  description: PropTypes.string,
};

export default Body;
