// var Parse = require('parse/node');
var Parse = require('parse');
//import $ from 'jquery';

var your_application_id = "NC8PhdseSu4eIz7fjSGX6Vxal3qqjfgnVEZjZ0gH";
var your_javascript_key = "TeJ3i2uljGynZO7wnrb5paUmZnAZjv4YGtzwVrqt";


// Initialize Parse with your Parse application javascript keys
Parse.initialize(your_application_id,
  your_javascript_key);


//Models
var Mission = Parse.Object.extend("Mission");
var Step = Parse.Object.extend("Step");


//////////////////
//API CALLS
//////////////////



//User signUp

function userSignup(username, password, email) {

  var user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("email", email);

  return user.signUp(null, {
    success: function(user) {
      return {
        status: true,
        response: user
      }
    },
    error: function(user, error) {
      // console.log("signup error",error);
      return {
        status: false,
        response: error
      }
    }
  });
}



//User login

function userLogIn(username, password) {

  //var username = Parse.User.logIn("username", username);
  //var password = Parse.User.logIn("password", password);

  Parse.User.logIn(username, password, {
    success: function(user) {
      return {
        status: true,
        response: user
      }
      //console.log("log in successful!");
    },
    error: function(user, error) {
      return {
        status: false,
        response: error
      }
      //console.log("Login error: " + error.message);
    }
  });
}

userLogIn("jdoe", "deadman");

// if (userLogIn("jdoe", "deadman").status) {
//   console.log("user logged in");
// }
// else {
//   console.log(error);
// }.
// then(function(user) {
//   console.log("User logged in!");
// }, function(error) {
//   console.log("Error: " + error.code + " " + error.message);
// });

// if (userSignup("fffbf","sdgsg").status) {
//   console.log("user signed up");
// }
// else {
//   console.log("user already exist");
// }
// .then(function(user) {
//   console.log("User signed up!");
// }, function(error) {
//   console.log("Error: " + error.code + " " + error.message);
// });



//User logout

// $("#logout").submit(function(event) {
//   Parse.User.logOut();
//   console.log("You are now logged out");

//   var currentUser = Parse.User.current();
// });


//ADD users to Mission
function assignUserToMission(missionId) {

  var user = Parse.User.current(); //user can assign other users to missions so not necessarily current user

  var query = new Parse.Query("Mission");

  query.get(missionId).then(function(mission) {
    var relation = mission.relation("Subscriptions");

    relation.add(user);

    mission.save();
  })
}

//ADD steps to Mission

function assignStepsToMission(missionId){
  
  var step = Parse.object(Step);
  
  query.get(missionId).then(function(mission){
    var relation = mission.relation("Step"); //or missionSteps?
    relation.add()
    
    step.save();
  })
} 

//List of missions for user
function findAllMissions() {
  var query = new Parse.Query("Subscriptions");
  query
    .equalTo('User', Parse.User.current())
    .find()
    .then(
      function(missions) {
        console.log(missions);
      });
}

//list of steps for user
function findAllSteps(){
  var query = new Parse.Query("Subscriptions");
  query
  .equalTo('User', Parse.User.current())
  .find()
  .then(
    function(steps){
      console.log(steps);
    })
}





// Create A Mission

var mission = new Parse.Query(Mission);


mission.get("mission-id")
   .then(function(mission) {
     // The object was retrieved successfully.
   })
   .then(function(hello) {
     // Everything is done!
   }, function(object, error) {
     // The object was not retrieved successfully.
     // error is a Parse.Error with an error code and message.
   });



//Steps list of a mission





//a step





//Complete a step //enter KEY


module.exports = {
  userSignup: userSignup
}