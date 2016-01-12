import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import NotFound from './components/NotFound';
import Adventures from './components/Adventures';
import Login from './components/Login';
import DisplayAdventures from './components/DisplayAdventures';
import SignUp from './components/SignUp';
import CreateAdventure from './components/CreateAdventure';
import Adventure from './components/Adventure';
import AdventureDetails from './components/AdventureDetails';
import Navbar from './components/Navbar';
import FindAdventure from './components/FindAdventure';




var routes = (
  <Router history={createHistory()}>
    <Route path="login" component={Login}/>
    <Route path="signup" component={SignUp}/>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="user-adventures" component={Adventures}/>
      <Route path="display-adventures" component={DisplayAdventures}/>
      
      <Route path="create-adventure" component={CreateAdventure}/>
      <Route path="adventure" component={Adventure}/>
      <Route path="adventure-details" component={AdventureDetails}/>
      <Route path="dashboard" component={Navbar}/>
      <Route path="findadventure" component={FindAdventure} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
