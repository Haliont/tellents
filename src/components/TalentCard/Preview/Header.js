import React from 'react';
import PropTypes from 'prop-types';
import FindCard from '../../FindCard';
import AwardIcon from '../../AwardIcon';

function Header({
  userAvatarSrc, userProfession, username, userRate,
}) {
  return (
    <FindCard.PreviewHeader>
      <FindCard.AvatarBlock>
        <FindCard.Avatar src={userAvatarSrc}>
          <AwardIcon />
        </FindCard.Avatar>
      </FindCard.AvatarBlock>

      <FindCard.UserHeader
        username={username}
        userProfession={userProfession}
      />

      <FindCard.Rate
        rate={userRate}
      />
    </FindCard.PreviewHeader>
  );
}

Header.defaultProps = {
  userRate: 0,
  userProfession: '',
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
  userRate: PropTypes.number,
  userAvatarSrc: PropTypes.string.isRequired,
  userProfession: PropTypes.string,
};

export default Header;
