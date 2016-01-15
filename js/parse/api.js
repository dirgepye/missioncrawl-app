var Parse = require('./package').getLib();
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
  userLogIn: u.userLogIn,
  getFirstStep: getFirstStep,
  getMissionList: getMissionList,
  getCurrentUser: getCurrentUser,
  completeStep: completeStep,
  getStepProgress:getStepProgress,
  getCompletedMissions:getCompletedMissions,
  getNextStep:getNextStep
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


function getCompletedMissions(currentUser) { // formerly named findAllMissions

  var currentUser = currentUser || Parse.User.current();
  var query = new Parse.Query(Subscriptions);

  return query
      .equalTo('user', currentUser)
      .include("mission")
      .include('step')
      .find()
      .then(function(userSubscriptions) {
        return userSubscriptions;
      });
}

//Steps list of a mission
function listStepsOfMission(missionId) {

  var query = new Parse.Query(Mission);

  return query
    //.include('steps')
    .get(missionId)
    .then(function(currentMission) {

      return currentMission.relation("steps").query().find();
    })
    .then(function(arrayOfSteps) {
      return arrayOfSteps;
    });
}


//ADD steps to Mission
function assignStepsToMission(title, description, GeoPoint, missionObj) {

  var point = new Parse.GeoPoint(GeoPoint);
  var newStep = new Step();
  newStep.set("title", title);
  newStep.set("description", description);
  newStep.set("location", point);

  var query = new Parse.Query(Mission);

  return newStep.save().then(function(savedStep) {

    return query
      .get(missionObj)
      .then(function(mission) {

        var stepRelation = mission.get("steps");

        stepRelation.add(savedStep);

        return mission.save();

      });
  });
}



//Subscribe to a Mission
function subscribeToMission(missionId,currentUser) { // formerly named assignUserToMission

  var currentUser = currentUser || Parse.User.current();
  var query = new Parse.Query("Mission");

  return query.get(missionId).then(function(mission) {

    var subscription = new Subscriptions({"completed":false});
    subscription.set("mission", mission);
    subscription.set("user", currentUser);

    return getFirstStep(mission).then(function(firstStep){
      subscription.set("step", firstStep);
      return subscription.save();
    });

  });
}

//List ALL Missions

function getMissionList() {
  var mission_query = new Parse.Query(Mission);

  return mission_query.find();

}

//Current Steps
function getStepProgress(mission) {

  var query = new Parse.Query(Subscriptions);
  var currentUser = Parse.User.current();

  return query
      .equalTo('user',currentUser)
      .equalTo('mission', mission)
      .include('step')
      .find()
}


// Get First Step of a Mission
function getFirstStep(mission) {
    return mission.relation("steps").query().ascending("stepOrder").find()
    .then(function(arrayOfSteps) {
        return arrayOfSteps[0];
    });
}

function completeStep(missionId, user) {

  var query = new Parse.Query(Subscriptions);
  var currentUser = user || Parse.User.current();
  console.log(currentUser);

  var missionQuery = new Parse.Query(Mission);

  return missionQuery
    .get(missionId)
    .then(function(mission){
      
      return query
      .equalTo('user', currentUser)
      .equalTo('completed', false)
      .equalTo('mission', mission)
      .include('step')
      .first()
      .then(function(userSubscription) {
        
        userSubscription.set('completed', true); //change 'completed' to true
  
        userSubscription.save(); //save change
        
        var completedStep = userSubscription.get("step");
        
        return getNextStep(mission,completedStep);

      })
      .then(function(nextStep){
        if (nextStep) {
          var subscription = new Subscriptions({completed:false});
          subscription.set("mission", mission);
          subscription.set("user", currentUser);
          subscription.set("step", nextStep);
      
          subscription.save();
          return nextStep;
        }
        else {
          return "completed";
        }
      })
    })

  
    

  // getNextStep(userSubscription);

}


// set complete? to true on the subscriptions



//check off current step
//add line in Subscriptions for next step



// add a new subscriptions for the next step
//   getNextStep(stepObj)

// }

function getNextStep(missionObj, currentStep) {
  
  var nextStepOrder = currentStep.get("stepOrder") + 1;
  console.log(nextStepOrder);
  return missionObj.relation("steps").query().equalTo("stepOrder",nextStepOrder).first();
}

//User's current step

function userCurrentStep(missionId, currentUser) {

  var query = new Parse.Query(Subscriptions);
  var currentUser = currentUser || Parse.User.current();

  var missionQuery = new Parse.Query(Mission);

  return missionQuery
      .get(missionId)
      .then(function(mission){
        return query
            .equalTo('user', currentUser)
            .equalTo('mission', mission)
            .equalTo('completed', false)
            .include('step')
            .first()
            .then(function(subscriptions) {
              return subscriptions.get('step');
            });
      })
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


function getCurrentUser() {
  return Parse.User.current();
}

//listStepsOfMission("bxreD6KsvJ");




//a step





//Complete a step //enter KEY
