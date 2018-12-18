import React from 'react';
import PropTypes from 'prop-types';
import FindCard from '../../FindCard';

function Header({ likes, budget, period }) {
  return (
    <FindCard.DropdownContentHeader>
      <FindCard.LikesList
        items={likes}
      />

      <FindCard.StatsList
        items={[
          {
            iconName: 'tag',
            title: 'RESPONSIVE',
            text: 'Fair',
          },
          {
            iconName: 'accounts',
            title: 'BUDGET',
            text: budget,
          },
          {
            iconName: 'clock-1',
            title: 'COMPLETE',
            text: period,
          },
        ]}
      />
    </FindCard.DropdownContentHeader>
  );
}

Header.propTypes = {
  likes: PropTypes.instanceOf(Array).isRequired,
};

export default Header;
