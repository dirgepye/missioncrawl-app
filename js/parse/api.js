var package = require("./package").package;
var Parse = require(package);

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
  getUserMissions:getUserMissions,
  subscribeToMission:subscribeToMission,
  listStepsOfMission:listStepsOfMission,
  assignStepsToMission: assignStepsToMission,
  userCurrentStep:userCurrentStep,
  stepsProgress:stepsProgress,
  getMission:getMission
};


//List of missions the current user is subscribed to: return an array of mission Parse Object
//adding a user as parameter for test purposing
//if left empty, will get the current user logged in
function getUserMissions(currentUser) { // formerly named findAllMissions

  var currentUser = currentUser || Parse.User.current();
  
  var query = new Parse.Query(Subscriptions);
  
  return query
    .equalTo('User', currentUser).include("Mission")
    .find()
    .then(function(userSubscriptions) {
      return userSubscriptions.map(function(sub){
        return sub.get("Mission");
      });
    });
}


//Steps list of a mission
function listStepsOfMission(missionId) {

  var query = new Parse.Query(Mission);
  
  return query.get(missionId)
  .then(function(currentMission){
    return currentMission.get("missionSteps");
  })
  .then(function(arrayOfSteps){
    return arrayOfSteps;
  });
}


//Subscribe to a Mission
function subscribeToMission(missionId) { // formerly named assignUserToMission

  var user = Parse.User.current(); //user can assign other users to missions so not necessarily current user

  var query = new Parse.Query("Mission");

  query.get(missionId).then(function(mission) {
    var relation = mission.relation("Subscriptions");

    relation.add(user);

    mission.save();
  });
}


//ADD steps to Mission
function assignStepsToMission(title, description, location, missionId) {

  var newStep = new Step();
  newStep.set("title", title);
  newStep.set("description", description);
  // newStep.set("location", location);

  var query = new Parse.Query(Mission);

  return newStep.save().then(function(savedStep){

    return query.get(missionId).then(function(mission) {
      
      var stepRelation = mission.get("steps");
      
      stepRelation.add(savedStep);
      
      return mission.save();
      
    });
  });
}

//User's current step

function userCurrentStep(mission,currentUser) {
  var query = new Parse.Query(Subscriptions);
  
  var currentUser = currentUser || Parse.User.current();
  
  return query
  .equalTo('user', currentUser)
  .equalTo('mission', mission)
  .include("step")
  .find()
  .then(function(subscriptions){
    return subscriptions[0].get('step');
  });
}

function stepsProgress(key){
  var query = new Parse.Query("Subscriptions");
  var currentUser = currentUser || Parse.User.current();
  
  query.equalTo('User', currentUser).find().then(function(currentStep){
    return currentStep.get("currentStep");
  }).then(function(step){
    if (key){
      return step + 1;  // return the NEXT step
    }
    else {
      return step; // return the CURRENT step
    }
  }
  );
}


function getMission(id){
    var query = new Parse.Query(Mission);
    return query.get(id);
}


//listStepsOfMission("bxreD6KsvJ");




//a step





//Complete a step //enter KEY
