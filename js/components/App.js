import React from 'react';

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>Crawl!</h1>
        <hr/>
        {this.props.children}
      </div>
    )
  }
});

export default App;