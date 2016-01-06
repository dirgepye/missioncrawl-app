import Parse from 'parse';
import $ from 'jquery';

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

//Check for Current User
function checkCurrentUser() {
  var currentUser = Parse.User.current();
  if (currentUser) { //user is logged in
    $("#current-user").html(Parse.User.current().get("username"));
    console.log("Logged in as " + Parse.User.current().get("username"));
  }
  else { // if not logged in, then clear html
    $("#current-user").html(" ");
  }
}

checkCurrentUser();

//User signUp

// var user = new Parse.User();
// user.set("username", "bsmith");
// user.set("password", "kitty123");
// user.set("email", "bob@home.org");

$("#signup").submit(function(event) {
  event.preventDefault();

  var username = $("#signup-name").val();
  var password = $("#signup-password").val();
  var email = $("#signup-email").val();

  var user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("email", email);

  user.signUp(null, {
    success: function(user) {
      //go to welcome page
      checkCurrentUser();
      $("#signup").val(" ");
    },
    error: function(user, error) {
      console.log("signup error" + error.message);
    }
  });
});

// .then(function(user) {
//   console.log("User signed up!");
// }, function(error) {
//   console.log("Error: " + error.code + " " + error.message);
// });

//User login

$("#login").submit(function(event){
  event.preventDefault();  //don't refresh browser
  
  var username = $("#login-name").val();
  var password = $("#login-password").val();

Parse.User.logIn(username, password, {
  success: function(user){
    checkCurrentUser();
    console.log("log in successful!");
  },
    error: function(user, error){
      console.log("error");
    }
  }
);
  // .then(function(user) {
  //   checkCurrentUser();
  //   console.log("Logged in successfully!");
  // });
});

//User logout

Parse.User.logOut();

var currentUser = Parse.User.current();


//List of missions
function getMissionList() {
  var mission_query = new Parse.Query(Mission);

  mission_query.find()
    .then(function(results) {
      console.log("Successfully retrieved " + results.length + " scores.");
    })
    .then(function(hello) {
      // Everything is done!
    }, function(error) {
      console.log("Error: " + error.code + " " + error.message);
    });
}

//A mission
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
