import React from 'react';
import {Link,History} from 'react-router';
// import {History} from 'history';
import reactMixin from 'react-mixin';
//import Parse from 'parse';

import api from '../parse/api';



var Login = React.createClass({
  mixins : [History],
  getInitialState : function() {
    return {
      error: ""
    }
  },
  loginHandler : function(event) {
    event.preventDefault();
   
    var profileUserName = this.refs.loginUserName.value;
    var profilePass = this.refs.loginPass.value;
    
    var currentComponent = this;
    
    api.userLogIn(profileUserName, profilePass)
    .then(function(user) {
        console.log("log in successful!");
        currentComponent.history.pushState(null, '/displaycrawls');
    },
    
    function(error) {
        console.log(error);
        currentComponent.setState({
          error: error.message
        });
    });
  },  
  render() {
    return (
      <div>
        <div className="header">
          <h1>Welcome</h1>
          <h3>Begin your adventure</h3>
        </div>
        <div>
          <form id="login" className="adventure adventure--login" onSubmit={this.loginHandler}>
            <h4>Log In</h4>
            <span className="error">{this.state.error}</span>
            <input type="text" ref="loginUserName" placeholder="user name" id="login-name" className="form form--login"/>
            <br />
            <input type="text" ref="loginPass" placeholder="password" id="login-password" className="form form--login"/>
            <br />
            <input type="Submit" className="form form--submit" />
            <p>Don't have an account? <Link to='/signup'>Sign up now!</Link></p>
          </form>
        </div>
      </div>
    );
  }
});

// ?????? wtf?

var Navigation = React.createClass ({
  renderLogIn(event) {
    event.preventDefault();
    console.log("tester test tsets");
    return ( <Login /> );
  },
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Welcome!</h1>
        </div>  
        <button onClick={this.renderHowTo}>How does it works</button>
        <br />
        <button onClick={this.renderLogIn}>Log In</button>
        <button onClick={this.renderSignUp}>Sign Up</button>
      </div>
    );
  }
});



// var Home = React.createClass({
//   render() {
//     return (
//       <div>
//         <ul>
//           <li><Link to="/repos">Repos</Link></li>
//           <li><Link to="/followers">Followers</Link></li>
//         </ul>
//       </div>
//     )
//   }
// });


export default Login;