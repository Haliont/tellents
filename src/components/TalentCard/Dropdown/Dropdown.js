import React from 'react';
import PropTypes from 'prop-types';
import FindCard from '../../FindCard';
import Sidebar from './Sidebar';
import Header from './Header';

const buildSidebarProps = ({
  username,
  workHours,
  jobsCount,
  languages,
  placeOfWork,
  availability,
  userAvatarSrc,
  userProfession,
}) => ({
  username,
  workHours,
  jobsCount,
  languages,
  placeOfWork,
  availability,
  userAvatarSrc,
  userProfession,
});

const buildHeaderProps = ({
  likes,
  lastActive,
  savedCount,
}) => ({ likes, lastActive, savedCount });

const Dropdown = React.forwardRef((props, ref) => {
  const { onClose, feedbacks, promotions } = props;
  return (
    <FindCard.Dropdown ref={ref}>
      <FindCard.DropdownCloseBtn
        onClick={onClose}
      />

      <FindCard.DropdownContent>
        <Sidebar {...buildSidebarProps(props)} />

        <FindCard.DropdownContentMain>
          <Header {...buildHeaderProps(props)} />

          <FindCard.DropdownContentBody
            className="job-details-feedback-scroll"
          >
            <FindCard.FeedbackList items={feedbacks} />
          </FindCard.DropdownContentBody>

          <FindCard.DropdownContentFooter>
            <FindCard.PromotionsList items={promotions} />
          </FindCard.DropdownContentFooter>

        </FindCard.DropdownContentMain>
      </FindCard.DropdownContent>
    </FindCard.Dropdown>
  );
});

Dropdown.displayName = 'Dropdown';

Dropdown.defaultProps = {
  availability: '',
  userProfession: '',
};

Dropdown.propTypes = {
  likes: PropTypes.instanceOf(Array).isRequired,
  onClose: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  jobsCount: PropTypes.number.isRequired,
  languages: PropTypes.instanceOf(Array).isRequired,
  feedbacks: PropTypes.instanceOf(Array).isRequired,
  workHours: PropTypes.number.isRequired,
  savedCount: PropTypes.number.isRequired,
  lastActive: PropTypes.string.isRequired,
  promotions: PropTypes.instanceOf(Array).isRequired,
  placeOfWork: PropTypes.string.isRequired,
  availability: PropTypes.string,
  userAvatarSrc: PropTypes.func.isRequired,
  userProfession: PropTypes.string,
};

export default Dropdown;
