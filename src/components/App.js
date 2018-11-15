import React, { Component } from 'react';

class App extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="App">
        <p>{text}</p>
      </div>
    );
  }
}

export default App;
