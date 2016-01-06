import React from 'react';
import {Link} from 'react-router';

var SignUp = React.createClass({
  render() {
    return (
      <div>
        <div className="header">
          <h1>Sign Up</h1>
          <h3>Fill out the info below!</h3>
        </div>
        <div>
          <form className="crawl crawl--login">
            <h4>Sign Up</h4>
            <input type="text" placeholder="user name" className="form form--login"/>
            <br />
            <input type="text" placeholder="password" className="form form--login"/>
            <br />
            <input type="Submit" value="sign up" className="form form--submit" />
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
