import React from 'react';
import Navbar from './Navbar';

var App = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <div style={{overflow: 'hidden'}}>{this.props.children}</div>
      </div>
    )
  }
});

export default App;