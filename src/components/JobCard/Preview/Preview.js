import React from 'react';
import PropTypes from 'prop-types';

import FindCard from '../../FindCard';
import Header from './Header';
import Body from './Body';

const buildHeaderProps = ({
  userAvatarSrc,
  jobCreatedAt,
  jobTitle,
  username,
  userRate,
}) => ({
  jobTitle,
  username,
  userRate,
  jobCreatedAt,
  userAvatarSrc,
});

const buildBodyProps = ({
  budget,
  period,
  country,
  skillTags,
  description,
  commitment,
  level,
}) => {
  const tips = [
    { id: 3, iconName: 'location', text: country },
    { id: 4, iconName: 'clock-1', text: commitment },
    { id: 1, iconName: 'award', text: level },
    { id: 2, iconName: 'timer', text: period },
    { id: 5, iconName: 'wallet', text: budget && `$${budget}` },
  ];

  return {
    tips,
    skillTags,
    description,
  };
};

function Preview(props) {
  const {
    isEven,
    isOpen,
    onOpen,
    onScroll,
    promotionTitle,
  } = props;

  const footerText = promotionTitle || 'The user has not promoted himself yet';

  return (
    <FindCard.Preview
      isOpen={isOpen}
      isEven={isEven}
      onOpen={onOpen}
      onScroll={onScroll}
    >
      <Header {...buildHeaderProps(props)} />
      <Body {...buildBodyProps(props)} />
      <FindCard.PreviewFooter
        text={footerText}
      />
    </FindCard.Preview>
  );
}

// promotionTitle
// userAvatarSrc
// jobCreatedAt
// description
// commitment
// skillTags
// jobTitle
// username
// userRate
// country
// level
// price
// period

Preview.defaultProps = {
  userRate: null,
  description: null,
  promotionTitle: null,
  userProfession: null,
};

Preview.propTypes = {
  isEven: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  userRate: PropTypes.number,
  username: PropTypes.string.isRequired,
  onScroll: PropTypes.func.isRequired,
  skillTags: PropTypes.instanceOf(Array).isRequired,
  description: PropTypes.string,
  userAvatarSrc: PropTypes.string.isRequired,
  promotionTitle: PropTypes.string,
  userProfession: PropTypes.string,
};

export default Preview;
