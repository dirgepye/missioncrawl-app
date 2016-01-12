import React from 'react';
import {Link,History} from 'react-router';
 
import reactMixin from 'react-mixin';


var SignUp = React.createClass({
  mixins : [History],
  getInitialState : function() {
    return {
      error: ""
    }
  }, 
  signUpHandler : function(event) {
    event.preventDefault();
    
    var userName = this.refs.signUpUserName.value;
    var userPassword = this.refs.signUpPassword.value;
    var userEmail = this.refs.signUpEmail.value;
    
    var user = new Parse.User();
    user.set("username", userName);
    user.set("password", userPassword);
    user.set("email", userEmail);
    
    var currentComponent = this;
    
    user.signUp(null)
    .then(function(user) {
    console.log("success")
      // go to show adventures
      
     currentComponent.history.pushState(null, '/displaycrawls');  
  //react
  },
  function(error) {
    console.log(error);
    // add error message on pop-up, leave it open
    console.log(currentComponent);
    currentComponent.setState({
    error: error.message
    });  
  });
    
  }, 
  render() {
    return (
      <div>
        <div className="header">
          <h1>Sign Up</h1>
          <h3>Fill out the info below!</h3>
        </div>
        <div>
          <form className="adventure adventure--login" onSubmit={this.signUpHandler}>
            <h4>Sign Up</h4>
            {this.state.error}
            <input type="text" ref="signUpUserName" placeholder="user name" id="signup-name" className="form form--login"/>
            <br />
            <input type="text" ref="signUpPassword" placeholder="password" id="signup-password" className="form form--login"/>
            <br />
            <input type="text" ref="signUpEmail" placeholder="email" id="signup-email" className="form form--login"/>
            <br />
            <input type="Submit" className="form form--submit" />
            <p>Any questions? <a href="#">Check out our FAQ</a></p>
          </form>
        </div>
      </div>
      );
  }
}
);

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

export default SignUp;
