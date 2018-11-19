import './Home.css';
import cn from 'classnames';
import React, { Component } from 'react';
import SignUp from '../SignUp';
import Auth from '../Auth';

const tabs = {
  signIn: 'signIn',
  signUp: 'signUp',
};

const getTab = (tabName) => {
  switch (tabName) {
    case tabs.signIn:
      return <Auth />;
    case tabs.signUp:
    default:
      return <SignUp />;
  }
};

class Home extends Component {
  state = {
    activeTabName: tabs.signUp,
  };

  handleChangeTab = ({ target }) => {
    const { tabName } = target.dataset;
    this.setState({ activeTabName: tabName });
  }

  render() {
    const { activeTabName } = this.state;

    const getBtnCn = tabName => cn({
      btn: true,
      'btn-primary': tabName === activeTabName,
      'Home-NavBtn': true,
    });

    return (
      <div className="Home">
        <div className="Home-Inner">
          <div className="Home-Nav">
            <button
              onClick={this.handleChangeTab}
              data-tab-name={tabs.signUp}
              type="submit"
              className={getBtnCn(tabs.signUp)}
            >
              Sign up
            </button>

            <button
              onClick={this.handleChangeTab}
              data-tab-name={tabs.signIn}
              type="submit"
              className={getBtnCn(tabs.signIn)}
            >
              Sign in
            </button>
          </div>
          <div className="Home-Main">
            {getTab(activeTabName)}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
