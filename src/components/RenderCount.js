import React from 'react';

class RenderCount extends React.Component {
  renders = 0;

  render() {
    this.renders += 1;
    return <div style={{ padding: '5px', border: '1px solid' }}>{this.renders}</div>;
  }
}

export default RenderCount;
