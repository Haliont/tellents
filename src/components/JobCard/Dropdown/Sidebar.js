import React from 'react';
import PropTypes from 'prop-types';
import FindCard from '../../FindCard';
import { capitalize } from '../../../utils';

function Sidebar({
  username,
  userRate,
  jobsCount,
  languages,
  placeOfWork,
  skillTestSend,
  userAvatarSrc,
}) {
  const infoItems = [
    { title: `${skillTestSend} Skill tests / ${jobsCount} jobs` },
    {
      title: 'Languages',
      children: <FindCard.LanguagesList items={languages} />,
    },
    {
      title: 'Place of work',
      text: placeOfWork && capitalize(placeOfWork),
    },
  ];

  const infoBtns = [
    { iconName: 'clipboard', text: 'Send a bid' },
    { iconName: 'output', text: 'More Info' },
    { iconName: 'comment', text: 'Message' },
  ];

  return (
    <FindCard.DropdownContentSidebar>
      <div className="photo-block">
        <div className="flexbox justify-space-between">
          <div className="award">
            <span className="icon icon-badge-solid" />
          </div>
          <FindCard.Avatar src={userAvatarSrc} />
          <FindCard.Rate rate={userRate} />
        </div>
        <FindCard.Title>
          <FindCard.Username username={username} />
        </FindCard.Title>
      </div>

      <FindCard.InfoList items={infoItems} />
      <FindCard.InfoBtnsList items={infoBtns} />
    </FindCard.DropdownContentSidebar>
  );
}

Sidebar.defaultProps = {
  placeOfWork: '',
};

Sidebar.propTypes = {
  username: PropTypes.string.isRequired,
  languages: PropTypes.instanceOf(Array).isRequired,
  jobsCount: PropTypes.number.isRequired,
  userAvatarSrc: PropTypes.string.isRequired,
  placeOfWork: PropTypes.string,
};

export default Sidebar;
