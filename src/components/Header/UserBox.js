import React, { Component } from 'react';
import cn from 'classnames';

import noAvatar from './imgs/no-avatar.png';

class UserBox extends Component {
  state = { isOpen: false };

  handleToggleOpen = () => this.setState(({ isOpen }) => ({
    isOpen: !isOpen,
  }));

  render() {
    const { username, onSignOut, userAvatar } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="user-box">
        <div
          className="user-photo"
          style={{
            backgroundImage: `url(${userAvatar || noAvatar})`,
          }}
        />
        <div
          className={cn('dropdown user-box-nav', {
            open: isOpen,
          })}
        >
          <a
            type="button"
            href="javascript:void(0);"
            onClick={this.handleToggleOpen}
            className="dropdown-toggle btn-reset"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            {username}
            <span className="caret" />
          </a>

          <ul className="dropdown-menu">
            <li>
              <a href="javascript:void(0);" className="btn-reset" type="button">My skills</a>
            </li>
            <li>
              <a
                onClick={onSignOut}
                href="javascript:void(0);"
                className="btn-reset"
                type="button"
              >
                Sign out
              </a>
            </li>
          </ul>

        </div>
      </div>
    );
  }
}

export default UserBox;
