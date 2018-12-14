import React from 'react';
// import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Dropdown from './Dropdown';

class JobCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.rootRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickAnotherCard);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickAnotherCard);
  }

  handleToggle = () => this.setState(({ isOpen }) => ({
    isOpen: !isOpen,
  }));

  handleScrollToDropdown = () => {
    // const coords = this.dropdownRef.current;
    // const coords = 150;
    // window.scrollTo(coords);
  };

  handleClickAnotherCard = ({ target }) => {
    if (
      target.closest('.job-box-block')
      && !this.rootRef.current.contains(target)
    ) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const {
      title,
      rate,
      tags,
      price,
      isEven,
      country,
      photoUrl,
      workHours,
      jobsCount,
      availability,
      additionalInfo,
      professionDesc,
      professionTitle,
      createdAt,
      user,
    } = this.props;

    const headerProps = {
      title,
      rate,
      photoUrl,
      professionTitle,
      username: user.full_name,
      userPhotoUrl: user.image.url,
      userRate: user.total_rate,
      created: moment(createdAt).fromNow(),
    };

    const bodyProps = {
      user,
      professionDesc,
      availability,
      workHours,
      jobsCount,
      country,
      price,
      tags,
      ...this.props,
    };

    const dropdownProps = {
      onClose: this.handleToggle,
      ...this.props,
    };

    const { isOpen } = this.state;

    return (
      <div ref={this.rootRef} className="job-box-block">
        <div
          onClick={isOpen
            ? this.handleScrollToDropdown
            : this.handleToggle
          }
          className={cn('panel panel-default job-box awarded', {
            open: isOpen,
            'left-details': !isEven,
            'right-details': isEven,
          })}
        >
          <Header {...headerProps} />
          <Body {...bodyProps} />
          <Footer {...{ additionalInfo }} />
        </div>

        <div className="caret-block">
          <span className="caret-top" />
        </div>

        {isOpen && <Dropdown {...dropdownProps} />}
      </div>
    );
  }
}

// JobCard.defaultProps = {
//   rate: 0,
//   profession: {},
// };

JobCard.propTypes = {
  // name,
  // rate,
  // tags,
  // price,
  // country,
  // photoUrl,
  // workHours,
  // jobsCount,
  // availability,
  // additionalInfo,
  // professionDesc,
  // professionTitle,
};

export default JobCard;
