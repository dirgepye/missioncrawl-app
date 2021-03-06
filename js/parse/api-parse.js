//var Parse = require('parse/node');
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
var Subscriptions = Parse.Object.extend("Subscriptions");

//////////////////
//API CALLS
//////////////////



//User signUp

function userSignup(username, password, email) {
  console.log('start');

  var user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  // user.set("email", email);

  return user.signUp(null);
}


// Signup test
// userSignup("jdoe", "deadman","email@dfds.com")
// .then(function(user) {
//     console.log("success");
//   //react
//   },
//   function(error) {
//     console.log(error);
    
// });



//User login

function userLogIn(username, password) {

  //var username = Parse.User.logIn("username", username);
  //var password = Parse.User.logIn("password", password);

  return Parse.User.logIn(username, password)
    .then(function(user) {
      console.log("log in successful!");
      return {
        status: true,
        response: user
      }
    }, function(user, error) {
      return {
        status: false,
        response: error
      }
      //console.log("Login error: " + error.message);
    });
}


// Login test
// userLogIn("jdoe", "deadman")
// .then(function(response){
//   console.log(response);
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

function assignStepsToMission(title, description, missionId) {

  var step = Parse.object(Step);
  step.set("title", title);
  step.set("description", description);
  //step.set("location", location);

  var query = new Parse.Query("Mission");

  query.get(missionId).then(function(mission) {
    var relation = mission.relation("missionStep");
    relation.add(step);
    step.save();
  })
}

//List of missions for user
function findAllMissions() {
  var query = new Parse.Query(Subscriptions);
  query
    .equalTo('User', Parse.User.current())
    .find()
    .then(
      function(userSubscriptions) {
        return userSubscriptions.map(function(sub){
          sub.get("Mission");
        });
      });
}

//list of steps for user
function findAllSteps() {
  var query = new Parse.Query("Subscriptions");
  query
    .equalTo('User', Parse.User.current())
    .find()
    .then(
      function(steps) {
        console.log(steps);
      })
}


// Create A Mission

var Mission = Parse.Object.extend('Mission');
var MissionStep = Parse.Object.extend('Step');

var mission = new Mission();
mission.set({
  title: 'Dessert Crawl',
  description: 'Eat all the desserts',
  //location: {}
});

var missionStep = new MissionStep();
missionStep.set({
  title: 'Go to Christian Faure',
  //location: {lat: 45, lng: -74},
});

var steps = mission.get('missionSteps') || [];

steps.push(missionStep);

mission.set('missionSteps', steps);
missionStep.save();

mission.save()




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

function listStepsOfMission(missionId) {

  var query = new Parse.Query(Mission);
  
  // query.include("");

  query.get(missionId)
  .then(function(currentMission){
    return currentMission.get("missionSteps");
  })
  .then(function(arrayOfSteps){
    console.log(arrayOfSteps);
  })
  // .get("missionSteps")
  // .then(function(steps){
  //   console.log(steps);
  // })
  // .then(function(results) {

  //     for (var i in results) {
  //       var title = results[i].get("title");
  //       var description = results[i].get("description");
  //       var missionSteps = results[i].get("missionSteps");
  //     }
  //   }
  // )
}

listStepsOfMission("vrRnpdOB2Y");

//listStepsOfMission("bxreD6KsvJ");




//a step





//Complete a step //enter KEY


module.exports = {
  userSignup: userSignup
}