import React from 'react';
import PropTypes from 'prop-types';

import FindCard from '../../FindCard';
import Header from './Header';
import Body from './Body';

const buildHeaderProps = ({
  userRate,
  username,
  userAvatarSrc,
  userProfession,
}) => ({
  userRate,
  username,
  userAvatarSrc,
  userProfession,
});

const buildBodyProps = ({
  price,
  country,
  workHours,
  jobsCount,
  skillTags,
  description,
  availability,
}) => {
  const tips = [
    { iconName: 'award', text: '0%' },
    { iconName: 'jobs', text: `${workHours} h/${jobsCount} j` },
    { iconName: 'location', text: country },
    { iconName: 'clock-1', text: availability },
    { iconName: 'wallet', text: price && `$${price}` },
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
      className="awarded"
    >
      <Header {...buildHeaderProps(props)} />
      <Body {...buildBodyProps(props)} />
      <FindCard.PreviewFooter
        text={footerText}
      />
    </FindCard.Preview>
  );
}

Preview.defaultProps = {
  userRate: null,
  description: null,
  promotionTitle: null,
  userProfession: null,
};

Preview.propTypes = {
  tips: PropTypes.instanceOf(Array).isRequired,
  isEven: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  userRate: PropTypes.number,
  username: PropTypes.string.isRequired,
  onScroll: PropTypes.string.isRequired,
  skillTags: PropTypes.instanceOf(Array).isRequired,
  description: PropTypes.string,
  userAvatarSrc: PropTypes.string.isRequired,
  promotionTitle: PropTypes.string,
  userProfession: PropTypes.string,
};

export default Preview;
