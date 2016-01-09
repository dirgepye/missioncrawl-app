import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import NotFound from './components/NotFound';
import Adventures from './components/Adventures';
import Login from './components/Login';
import Followers from './components/Followers';
import Repos from './components/Repos';
import DisplayCrawls from './components/DisplayCrawls';
import SignUp from './components/SignUp';
import CreateCrawl from './components/CreateCrawl';
import Adventure from './components/Adventure';
import AdventureDetails from './components/AdventureDetails';
import HomeBase from './components/HomeBase';


import parseAPI from './parse/api-parse';

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="user-adventures" component={Adventures}/>
      <Route path="followers" component={Followers}/>
      <Route path="repos" component={Repos}/>
      <Route path="displaycrawls" component={DisplayCrawls}/>
      <Route path="signup" component={SignUp}/>
      <Route path="createcrawl" component={CreateCrawl}/>
      <Route path="login" component={Login}/>
      <Route path="adventure" component={Adventure}/>
      <Route path="adventure-details" component={AdventureDetails}/>
      <Route path="homebase" component={HomeBase}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
