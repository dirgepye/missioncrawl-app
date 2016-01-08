var Parse = require('parse/node');
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

// //Check for Current User
// function checkCurrentUser() {
//   var currentUser = Parse.User.current();
//   if (currentUser) { //user is logged in
//     $("#current-user").html(Parse.User.current().get("username"));
//     console.log("Logged in as " + Parse.User.current().get("username"));

//   }
//   else { // if not logged in, then clear html
//     $("#current-user").html(" ");
//   }
// }

// checkCurrentUser();

//User signUp

// var user = new Parse.User();
// user.set("username", "bsmith");
// user.set("password", "kitty123");
// user.set("email", "bob@home.org");
function userSignup(username, password, email){

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

//User login

$("#login").submit(function(event) {
  event.preventDefault(); //don't refresh browser

  var username = $("#login-name").val();
  var password = $("#login-password").val();

  Parse.User.logIn(username, password, {
    success: function(user) {

      // checkCurrentUser();
    // getMissionList();
      console.log("log in successful!");
    },
    error: function(user, error) {
      console.log("Login error: " + error.message);
    }
  });
  // .then(function(user) {
  //   checkCurrentUser();
  //   console.log("Logged in successfully!");
  // });
});

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


// function getMissionList() {
//   var mission_query = new Parse.Query(Mission);

//   mission_query.include("Subscriptions");

//   mission_query.find()
//     .then(function(results) {
//       var output = "";
//       for(var i in results){
//         var title = results[i].get("title");
//         var description = results[i].get("description");
//         var subscriptions = results[i].get("Subscriptions");

//         output += "<li>";
//         output += "<h3>" +title+ "</h3>";
//         output += "<p>" +description+ "</p>";
//         output += "<p>" +subscriptions+ "</p>";
//         output += "</li>";

//         $("#myMissions").html(output);
//       }

//       console.log("Successfully retrieved " + results.length + " missions.");
//     })
//     .then(function(hello) {
//       // Everything is done!
//     }, function(error) {
//       console.log("Error: " + error.code + " " + error.message);
//     });
// }

// $("#myMissions").submit(function(event) {
//   event.preventDefault();
//   getMissionList();

// });

// //A mission
// var mission = new Parse.Query(Mission);
// mission.get("mission-id")
//   .then(function(mission) {
//     // The object was retrieved successfully.
//   })
//   .then(function(hello) {
//     // Everything is done!
//   }, function(object, error) {
//     // The object was not retrieved successfully.
//     // error is a Parse.Error with an error code and message.
//   });



//Steps list of a mission





//a step





//Complete a step //enter KEY
