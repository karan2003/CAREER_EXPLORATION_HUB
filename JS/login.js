// Use a consistent indentation and spacing style for your code
$("#signup").click(function() {
  $("#first").fadeOut("fast", function() {
    $("#second").fadeIn("fast");
  });
});

$("#signin").click(function() {
  $("#second").fadeOut("fast", function() {
    $("#first").fadeIn("fast");
  });
});

// Use meaningful and descriptive variable names
// Avoid using reserved words like "name" or single letters like "a"
$(function() {
  $("form[name='login']").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    messages: {
      email: "Please enter a valid email address",
      password: "Please enter password"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
$(function() {
  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      // Add a rule to check if the passwords match
      Cpassword: {
        required: true,
        equalTo: "#password"
      }
    },
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address",
      // Add a message to display if the passwords do not match
      Cpassword: {
        required: "Please confirm your password",
        equalTo: "Your passwords do not match"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});

$(document).ready(function() {
  $("#log").click(function(q) {
    q.preventDefault();
    window.location.href = "../interest.html";
  });
});

var Fname1;

function Name(name1, name2) {
  this.Firstname = name1;
  this.Lastname = name2;
}

Name.prototype.fullname = function() {
  return this.Firstname + " " + this.Lastname;
};

$(document).ready(function() {
  $("#signInn").click(function(event) {
    event.preventDefault();
    var Fname = $("input#firstname").val();
    var Lname = $("input#lastname").val();
    var mail = $("input#email").val();
    var Pass = $("input#password").val();
    var Cpass = $("input#Cpassword").val();
    var newperson = new Name(Fname, Lname);
    // Use local storage or session storage to store and retrieve the user data on the client side
    // This will allow you to persist the data across page loads and avoid losing the changes you made in the debugger
    localStorage.setItem("fullname", newperson.fullname());
    window.location.href = "interest.html";
    // Fname1 = newperson.fullname();
    // $("#namess").append(Fname1);
    // $("#sasasa").append(Fname1);
  });
});
