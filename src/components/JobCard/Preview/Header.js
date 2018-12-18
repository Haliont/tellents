import React from 'react';
import PropTypes from 'prop-types';
import FindCard from '../../FindCard';
import AwardIcon from '../../AwardIcon';

function Header({
  userAvatarSrc, jobTitle, jobCreatedAt, username, userRate,
}) {
  return (
    <FindCard.PreviewHeader>
      <FindCard.Title>
        <div className="post-date">{jobCreatedAt}</div>
        <div className="job-title">{jobTitle}</div>
      </FindCard.Title>

      <FindCard.PanelDefault>
        <div className="flexbox justify-space-between">
          <FindCard.AvatarBlock>
            <FindCard.Avatar src={userAvatarSrc} />
          </FindCard.AvatarBlock>
          <AwardIcon />
          <FindCard.Rate rate={userRate} />
        </div>
        <div className="blue-color">{username}</div>
      </FindCard.PanelDefault>

    </FindCard.PreviewHeader>
  );
}

Header.defaultProps = {
  userRate: 0,
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
  userRate: PropTypes.number,
  userAvatarSrc: PropTypes.string.isRequired,
};

export default Header;
