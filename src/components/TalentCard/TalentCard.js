import React from 'react';
import PropTypes from 'prop-types';
import FindCard from '../FindCard';
import Preview from './Preview';
import Dropdown from './Dropdown';

const buildPreviewProps = ({
  userRate,
  username,
  skillTags,
  workHours,
  jobsCount,
  description,
  availability,
  userAvatarSrc,
  promotionTitle,
  userProfession,
}) => ({
  userRate,
  username,
  skillTags,
  workHours,
  jobsCount,
  description,
  availability,
  userAvatarSrc,
  promotionTitle,
  userProfession,
});

const buildDropdownProps = ({
  likes,
  username,
  jobsCount,
  languages,
  feedbacks,
  workHours,
  savedCount,
  lastActive,
  promotions,
  placeOfWork,
  availability,
  userAvatarSrc,
  userProfession,
}) => ({
  likes,
  username,
  jobsCount,
  languages,
  feedbacks,
  workHours,
  savedCount,
  lastActive,
  promotions,
  placeOfWork,
  availability,
  userAvatarSrc,
  userProfession,
});

function TalentCard({ inx, ...rest }) {
  return (
    <FindCard inx={inx}>
      {(isEven, isOpen, toggle, scroll, dropdownRef) => (
        <>
          <Preview
            isEven={isEven}
            isOpen={isOpen}
            onOpen={toggle}
            onScroll={scroll}
            {...buildPreviewProps(rest)}
          />

          <FindCard.Caret />

          {isOpen && (
            <Dropdown
              ref={dropdownRef}
              onClose={toggle}
              {...buildDropdownProps(rest)}
            />
          )}
        </>
      )}
    </FindCard>
  );
}

TalentCard.defaultProps = {
  description: null,
  placeOfWork: null,
  availability: null,
  promotionTitle: null,
  userProfession: null,
};

TalentCard.propTypes = {
  likes: PropTypes.instanceOf(Array).isRequired,
  userRate: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  skillTags: PropTypes.instanceOf(Array).isRequired,
  jobsCount: PropTypes.number.isRequired,
  languages: PropTypes.instanceOf(Array).isRequired,
  feedbacks: PropTypes.instanceOf(Array).isRequired,
  workHours: PropTypes.number.isRequired,
  savedCount: PropTypes.number.isRequired,
  lastActive: PropTypes.string.isRequired,
  promotions: PropTypes.instanceOf(Array).isRequired,
  description: PropTypes.string,
  placeOfWork: PropTypes.string,
  availability: PropTypes.string,
  userAvatarSrc: PropTypes.string.isRequired,
  promotionTitle: PropTypes.string,
  userProfession: PropTypes.string,
};

export default TalentCard;
