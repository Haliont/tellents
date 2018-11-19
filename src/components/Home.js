import React, { Component } from 'react';
import Reg from './Reg';

class Home extends Component {
  state = {
    activeTab: 'registration',
  };

  render() {
    const { activeTab } = this.state;
    return activeTab === 'registration'
      ? <Reg />
      : <p>Another tab</p>;
  }
}

export default Home;
