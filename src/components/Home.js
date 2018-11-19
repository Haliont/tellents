import React, { Component } from 'react';
import Reg from './Reg';
import Auth from './Auth';

class Home extends Component {
  state = {
    activeTab: 'auth',
  };

  render() {
    const { activeTab } = this.state;

    switch (activeTab) {
      case 'auth':
        return <Auth />;
      case 'reg':
      default:
        return <Reg />;
    }
  }
}

export default Home;
