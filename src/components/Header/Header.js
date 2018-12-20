import React, { Component } from 'react';
import cn from 'classnames';
import logo from './imgs/logo.png';

import UserBox from './UserBox';
import Search from './Search';
import ListItemLink from '../ListItemLink';

// import NavList from './NavList';

// const navLinks = [
//   {
//     name: 'Find',
//     path: '/dashboard/find',
//   },
//   {
//     name: 'Your office',
//     path: '/dashboard/your-office',
//   },
// ];

class Header extends Component {
  state = {
    isOpenOnMobile: false,
  };

  handleToggleOpen = () => this.setState(({ isOpenOnMobile }) => ({
    isOpenOnMobile: !isOpenOnMobile,
  }));

  handleSignOut = () => {
    const { signOut } = this.props;
    signOut();
  }

  render() {
    const { isOpenOnMobile } = this.state;
    const { username, userAvatar } = this.props;

    return (
      <nav
        className={cn('main-top-nav flexbox justify-space-between', {
          'menu-open': isOpenOnMobile,
        })}
      >
        <div className="logo">
          <img src={logo} height={39} width="auto" alt="Tellents logo" />
        </div>
        <div type="button" className="humburger-icon">
          <button
            type="button"
            onClick={this.handleToggleOpen}
            className="btn btn-bg-transparent"
          >
            <span className="icon icon-menu" />
          </button>
        </div>

        <section className="nav-mobile flexbox justify-space-between">
          <section className="nav-tablet flexbox justify-space-center">
            <Search />
            {/* <NavList links={navLinks} /> */}
            <div className="nav-list">
              <ul className="flexbox justify-space-between">
                <ListItemLink to="/dashboard/find">
                  Find
                  <div className="caret" />
                </ListItemLink>
                <ListItemLink to="/dashboard/your-office">
                  Your office
                  <div className="caret" />
                </ListItemLink>
              </ul>
            </div>
          </section>

          <UserBox
            userAvatar={userAvatar}
            username={username}
            onSignOut={this.handleSignOut}
          />
        </section>
      </nav>
    );
  }
}

export default Header;
