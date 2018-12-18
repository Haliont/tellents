import React from 'react';
import PropTypes from 'prop-types';
import FindCard from '../FindCard';
import Preview from './Preview';
import Dropdown from './Dropdown';

const buildPreviewProps = ({
  promotionTitle,
  userAvatarSrc,
  jobCreatedAt,
  description,
  commitment,
  skillTags,
  workHours,
  jobsCount,
  jobTitle,
  username,
  userRate,
  country,
  period,
  level,
  price,
}) => ({
  level,
  price,
  period,
  country,
  userRate,
  username,
  jobTitle,
  skillTags,
  workHours,
  jobsCount,
  commitment,
  description,
  jobCreatedAt,
  userAvatarSrc,
  promotionTitle,
});

const buildDropdownProps = ({
  promotionDescription,
  jobDescription,
  promotionTitle,
  userAvatarSrc,
  skillTestSend,
  placeOfWork,
  jobsCount,
  languages,
  jobTitle,
  username,
  userRate,
  period,
  budget,
  likes,
}) => ({
  likes,
  budget,
  period,
  userRate,
  username,
  jobTitle,
  jobsCount,
  languages,
  placeOfWork,
  skillTestSend,
  userAvatarSrc,
  promotionTitle,
  jobDescription,
  promotionDescription,
});

function JobCard({ inx, ...rest }) {
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

JobCard.defaultProps = {
  promotionDescription: null,
  promotionTitle: null,
  placeOfWork: null,
  commitment: null,
  country: null,
  budget: null,
  level: null,
};

JobCard.propTypes = {
  promotionDescription: PropTypes.string,
  promotionTitle: PropTypes.string,
  jobDescription: PropTypes.string.isRequired,
  skillTestSend: PropTypes.number.isRequired,
  userAvatarSrc: PropTypes.string.isRequired,
  jobCreatedAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  placeOfWork: PropTypes.string,
  commitment: PropTypes.string,
  skillTags: PropTypes.instanceOf(Array).isRequired,
  languages: PropTypes.instanceOf(Array).isRequired,
  jobTitle: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userRate: PropTypes.number.isRequired,
  country: PropTypes.string,
  period: PropTypes.string.isRequired,
  budget: PropTypes.number,
  likes: PropTypes.instanceOf(Array).isRequired,
  level: PropTypes.string,
};

export default JobCard;
