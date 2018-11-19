import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Skills from './Skills';
import Search from './Search';
import PageSwitcher from './PageSwitcher';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/page-switcher" component={PageSwitcher} />
          <Route path="/skills" component={Skills} />
          <Route path="/search" component={Search} />
        </>
      </Router>
    );
  }
}

export default App;
