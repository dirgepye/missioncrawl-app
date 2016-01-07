import React from 'react';
import {Link,History} from 'react-router';
// import {History} from 'history';
import reactMixin from 'react-mixin';
import api from '../parse/api-parse';

var Login = React.createClass({
  mixins : [History],
  goToProfile(event) {
    event.preventDefault();

    var profileUserName = this.refs.profileUserName.value;
    var profilePass = this.refs.profilePass.value;

    // if (api.userLogin(profileUserName,profilePass)) === 'ok'{
    // login OK
    // this.history.pushState(null, '/profile');
    //};
    // else {
      
    // }
    
    this.history.pushState(null, '/home');
  },
  render() {
    return (
      <div>
        <div className="header">
          <h1>Welcome</h1>
          <h3>Begin your adventure</h3>
        </div>
        <div>
          <form id="login" className="crawl crawl--login" onSubmit={this.goToProfile}>
            <h4>Log In</h4>
            <input type="text" ref="profileUserName" placeholder="user name" id="login-name" className="form form--login"/>
            <br />
            <input type="text" ref="profilePass" placeholder="password" id="login-password" className="form form--login"/>
            <br />
            <input type="Submit" className="form form--submit" />
            <p>Don't have an account? <a href="#">Sign up now!</a></p>
          </form>
        </div>
      </div>
    );
  }
}
);



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


export default Navigation;