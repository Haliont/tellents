import React from 'react';
// import PropTypes from 'prop-types';
import cn from 'classnames';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Dropdown from './Dropdown';

class TalentCard extends React.Component {
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
      name,
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
    } = this.props;

    const headerProps = {
      name, rate, photoUrl, professionTitle,
    };

    const bodyProps = {
      professionDesc, availability, workHours, jobsCount, country, price, tags,
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

// TalentCard.defaultProps = {
//   rate: 0,
//   profession: {},
// };

TalentCard.propTypes = {
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

export default TalentCard;
