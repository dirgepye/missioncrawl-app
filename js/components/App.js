import React from 'react';
import Navbar from './Navbar';

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>GitHub sample app!</h1>
        <Navbar />
        <div style={{overflow: 'hidden'}}>{this.props.children}</div>
      </div>
    )
  }
});

export default App;