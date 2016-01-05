import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import NotFound from './components/NotFound';
import Home from './components/Home';
// import Followers from './components/Followers';
// import Repos from './components/Repos';

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      {// <Route path="followers" component={Followers}/>
      // <Route path="repos" component={Repos}/>
      }
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#app'));
