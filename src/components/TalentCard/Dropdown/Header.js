import React from 'react';
import PropTypes from 'prop-types';
import FindCard from '../../FindCard';

function Header({ likes, lastActive, savedCount }) {
  return (
    <FindCard.DropdownContentHeader>
      <FindCard.LikesList
        items={likes}
      />

      <FindCard.StatsList
        className="vertical-align-items-center"
        items={[
          {
            iconName: 'comments',
            title: 'RESPONSIVE',
            text: 'Fair',
          },
          {
            iconName: 'calendar2',
            title: 'LAST ACTIVE',
            text: lastActive,
          },
          {
            iconName: 'saved',
            title: 'SAVED',
            text: savedCount,
          },
        ]}
      />
    </FindCard.DropdownContentHeader>
  );
}

Header.defaultProps = {
  savedCount: 0,
};

Header.propTypes = {
  likes: PropTypes.instanceOf(Array).isRequired,
  lastActive: PropTypes.string.isRequired,
  savedCount: PropTypes.number,
};

export default Header;
