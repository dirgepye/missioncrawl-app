import React from 'react';
import {Link} from 'react-router';

var Home = React.createClass({
  render() {
    return (
      <div>
        <div className="header">
          <h1>Welcome</h1>
          <h3>Begin your adventure</h3>
        </div>
        <div>
          <form id="login" className="crawl crawl--login">
            <h4>Log In</h4>
            <input type="text" placeholder="user name" id="login-name" className="form form--login"/>
            <br />
            <input type="text" placeholder="password" id="login-password" className="form form--login"/>
            <br />
            <input type="Submit" value="log in" className="form form--submit" />
            <p>Don't have an account? <a href="#">Sign up now!</a></p>
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

export default Home;
