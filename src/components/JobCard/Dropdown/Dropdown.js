import React from 'react';
import PropTypes from 'prop-types';
import FindCard from '../../FindCard';
import Sidebar from './Sidebar';
import Header from './Header';

const buildHeaderProps = ({
  likes,
  period,
  budget,
  jobTitle,
  jobDescription,
  promotionTitle,
  promotionDescription,
}) => ({
  promotionDescription,
  promotionTitle,
  jobDescription,
  jobTitle,
  period,
  budget,
  likes,
});

const buildSidebarProps = ({
  username,
  userRate,
  jobsCount,
  languages,
  placeOfWork,
  skillTestSend,
  userAvatarSrc,
}) => ({
  skillTestSend,
  userAvatarSrc,
  placeOfWork,
  jobsCount,
  languages,
  userRate,
  username,
});

const Dropdown = React.forwardRef((props, ref) => {
  const {
    onClose,
    jobTitle,
    jobDescription,
    promotionTitle,
    promotionDescription,
  } = props;

  return (
    <FindCard.Dropdown ref={ref}>
      <FindCard.DropdownCloseBtn
        onClick={onClose}
      />

      <FindCard.DropdownContent>
        <Sidebar {...buildSidebarProps(props)} />

        <FindCard.DropdownContentMain>
          <Header {...buildHeaderProps(props)} />

          <FindCard.DropdownContentBody>
            <div className="job-details-descr">
              <div className="job-title">
                {jobTitle}
              </div>
              <div className="job-descr-text">
                {jobDescription}
              </div>
            </div>
          </FindCard.DropdownContentBody>

          <FindCard.DropdownContentFooter>
            <FindCard.PromotionItem
              title={promotionTitle}
              description={promotionDescription}
            />
          </FindCard.DropdownContentFooter>

        </FindCard.DropdownContentMain>
      </FindCard.DropdownContent>
    </FindCard.Dropdown>
  );
});

Dropdown.displayName = 'Dropdown';

Dropdown.defaultProps = {
  placeOfWork: null,
  availability: '',
  userProfession: '',
};

Dropdown.propTypes = {
  promotionDescription: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  promotionTitle: PropTypes.string,
  userAvatarSrc: PropTypes.string.isRequired,
  skillTestSend: PropTypes.number.isRequired,
  placeOfWork: PropTypes.string,
  jobsCount: PropTypes.number.isRequired,
  languages: PropTypes.instanceOf(Array).isRequired,
  jobTitle: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userRate: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
  likes: PropTypes.instanceOf(Array).isRequired,
};

export default Dropdown;
