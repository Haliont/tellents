import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import * as components from './components';

class FindCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.rootRef = React.createRef();
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickAnotherCard);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickAnotherCard);
  }

  handleToggle = () => this
    .setState(({ isOpen }) => ({ isOpen: !isOpen }));

  handleScrollToDropdown = () => {
    const offset = 55;
    const { top } = this.dropdownRef.current.getBoundingClientRect();

    window.scrollBy({
      top: top - offset,
      left: 0,
      behavior: 'smooth',
    });
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
    const { isOpen } = this.state;
    const { children, inx } = this.props;
    const isEven = (inx + 1) % 2 === 0;

    return (
      <div
        ref={this.rootRef}
        className="job-box-block"
      >
        {children(
          isEven,
          isOpen,
          this.handleToggle,
          this.handleScrollToDropdown,
          this.dropdownRef,
        )}
      </div>
    );
  }
}

/* eslint-disable */
FindCard.DropdownContentSidebar = components.DropdownContentSidebar;
FindCard.DropdownContentFooter  = components.DropdownContentFooter;
FindCard.DropdownContentHeader  = components.DropdownContentHeader;
FindCard.DropdownContentMain    = components.DropdownContentMain;
FindCard.DropdownContentBody    = components.DropdownContentBody;
FindCard.DropdownCloseBtn       = components.DropdownCloseBtn;
FindCard.DropdownContent        = components.DropdownContent;
FindCard.PromotionsList         = components.PromotionsList;
FindCard.LanguagesList          = components.LanguagesList;
FindCard.PreviewHeader          = components.PreviewHeader;
FindCard.PreviewFooter          = components.PreviewFooter;
FindCard.FeedbackList           = components.FeedbackList;
FindCard.InfoBtnsList           = components.InfoBtnsList;
FindCard.PanelDefault           = components.PanelDefault;
FindCard.Description            = components.Description;
FindCard.AvatarBlock            = components.AvatarBlock;
FindCard.PreviewBody            = components.PreviewBody;
FindCard.UserHeader             = components.UserHeader;
FindCard.StatsList              = components.StatsList;
FindCard.LikesList              = components.LikesList;
FindCard.InfoBlock              = components.InfoBlock;
FindCard.Username               = components.Username;
FindCard.TipsList               = components.TipsList;
FindCard.InfoList               = components.InfoList;
FindCard.Dropdown               = components.Dropdown;
FindCard.Preview                = components.Preview;
FindCard.Avatar                 = components.Avatar;
FindCard.Title                  = components.Title;
FindCard.Caret                  = components.Caret;
FindCard.Panel                  = components.Panel;
FindCard.Rate                   = components.Rate;
FindCard.Tip                    = components.Tip;
/* eslint-enable */

export default FindCard;
