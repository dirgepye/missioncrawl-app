var package = require("./package").package;
var Parse = require(package);
var u = require('./user');

// Initialize Parse with your Parse application javascript keys
var your_application_id = "NC8PhdseSu4eIz7fjSGX6Vxal3qqjfgnVEZjZ0gH";
var your_javascript_key = "TeJ3i2uljGynZO7wnrb5paUmZnAZjv4YGtzwVrqt";

Parse.initialize(your_application_id,
  your_javascript_key);


//Models
var Mission = Parse.Object.extend("Mission");
var Step = Parse.Object.extend("Step");
var Subscriptions = Parse.Object.extend("Subscriptions");



//////////////////
//API CALLS
//////////////////
module.exports = {
  getUserMissions: getUserMissions,
  subscribeToMission: subscribeToMission,
  listStepsOfMission: listStepsOfMission,
  assignStepsToMission: assignStepsToMission,
  userCurrentStep: userCurrentStep,
  stepsProgress: stepsProgress,
  getMission: getMission,
  userSignup: u.userSignup,
  userLogIn: u.userLogIn
};


//List of missions the current user is subscribed to: return an array of mission Parse Object
//adding a user as parameter for test purposing
//if left empty, will get the current user logged in
function getUserMissions(currentUser) { // formerly named findAllMissions

  var currentUser = currentUser || Parse.User.current();

  var query = new Parse.Query(Subscriptions);

  return query
    .equalTo('user', currentUser)
    .include("mission")
    .find()
    .then(function(userSubscriptions) {
      return userSubscriptions.map(function(sub) {
        return sub.get("mission"); //returns array of mission objects .get("title") gives titles of missions
      });
    });
}


//Steps list of a mission
function listStepsOfMission(missionId) {

  var query = new Parse.Query(Mission);

  return query
    .include('steps')
    .get(missionId)
    .then(function(currentMission) {
      return currentMission.get("steps");
    })
    .then(function(arrayOfSteps) {
      return arrayOfSteps;
    });
}


//ADD steps to Mission
function assignStepsToMission(title, description, location, missionObj) {

  var newStep = new Step();
  newStep.set("title", title);
  newStep.set("description", description);
  // newStep.set("location", location);

  var query = new Parse.Query(Mission);

  return newStep.save().then(function(savedStep) {

    return query.get(missionObj).then(function(mission) {

      var stepRelation = mission.get("steps");

      stepRelation.add(savedStep);

      return mission.save();

    });
  });
}



//Subscribe to a Mission
function subscribeToMission(missionId) { // formerly named assignUserToMission

  var user = Parse.User.current(); //user can assign other users to missions so not necessarily current user

  var query = new Parse.Query("Mission");

  query.get(missionId).then(function(mission) {

    var subscription = new Subscriptions();
    subscription.set("Mission", mission);
    subscription.set("User", user);
    subscription.set("Step", getFirstStep(mission));

    subscription.save();

  });
}

function getFirstStep(missionObj) {

}

function completeStep(stepObj, missionObj, user) {

  // set complete? to true on the subscriptions


  // add a new subscriptions for the next step
  getNextStep(stepObj)

}

function getNextStep(missionObj, currentStep) {

}

//User's current step

function userCurrentStep(mission, currentUser) {
  var query = new Parse.Query(Subscriptions);

  var currentUser = currentUser || Parse.User.current();

  return query
    .equalTo('user', currentUser)
    .equalTo('mission', mission)
    .include('step')
    .find()
    .then(function(subscriptions) {
      return subscriptions[0].get('step');
    });
}


function stepsProgress(key) { //do we need key???
  var query = new Parse.Query(Subscriptions);
  var currentUser = currentUser || Parse.User.current();

  query
    .equalTo('user', currentUser)
    .include('step') //?? do we include step here??
    .find()
    .then(function(currentStep) {
      return currentStep.get("currentStep");
    }).then(function(step) {
      if (key) {
        return step + 1; // return the NEXT step
      }
      else {
        return step; // return the CURRENT step
      }
    });
}


function getMission(id) {
  var query = new Parse.Query(Mission);
  return query.get(id);
}


//listStepsOfMission("bxreD6KsvJ");




//a step





//Complete a step //enter KEY
