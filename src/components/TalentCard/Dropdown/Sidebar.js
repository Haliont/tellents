import React from 'react';
import PropTypes from 'prop-types';
import FindCard from '../../FindCard';
import { capitalize } from '../../../utils';

function Sidebar({
  username,
  workHours,
  jobsCount,
  languages,
  placeOfWork,
  availability,
  userAvatarSrc,
  userProfession,
}) {
  const infoItems = [
    { title: 'Available', text: availability },
    { text: `${workHours} h/${jobsCount} j` },
    {
      title: 'Languages',
      children: () => <FindCard.LanguagesList languages={languages} />,
    },
    {
      title: 'Place of work',
      text: placeOfWork && capitalize(placeOfWork),
    },
  ];

  const infoBtns = [
    { iconName: 'clipboard', text: 'Hire' },
    { iconName: 'jobs', text: 'Portfolio' },
    { iconName: 'output', text: 'View Page' },
    { iconName: 'comment', text: 'Message' },
  ];

  return (
    <FindCard.DropdownContentSidebar>
      <div className="photo-block">
        <FindCard.Avatar src={userAvatarSrc} />
        <FindCard.UserHeader
          username={username}
          userProfession={userProfession}
        />
      </div>

      <FindCard.InfoList items={infoItems} />
      <FindCard.InfoBtnsList items={infoBtns} />
    </FindCard.DropdownContentSidebar>
  );
}

Sidebar.defaultProps = {
  placeOfWork: '',
  availability: '',
  userProfession: '',
};

Sidebar.propTypes = {
  username: PropTypes.string.isRequired,
  languages: PropTypes.instanceOf(Array).isRequired,
  workHours: PropTypes.number.isRequired,
  jobsCount: PropTypes.number.isRequired,
  userAvatarSrc: PropTypes.string.isRequired,
  placeOfWork: PropTypes.string,
  availability: PropTypes.string,
  userProfession: PropTypes.string,
};

export default Sidebar;
