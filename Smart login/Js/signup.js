var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPass = document.getElementById("pass");

var user = [];

if (localStorage.getItem("users") !== null) {
  user = JSON.parse(localStorage.getItem("users"));
}
function signUp() {
  var nameVal = /^[a-zA-Z0-9_-]{3,15}$/;
  var emailVal = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  var passVal =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  if (
    nameVal.test(userName.value) === true &&
    emailVal.test(userEmail.value) === true &&
    passVal.test(userPass.value) === true
  ) {
    var newUser = {
      name: userName.value,
      email: userEmail.value,
      password: userPass.value,
    };

    for (i = 0; i < user.length; i++) {
      if (
        user[i].name === userName.value &&
        user[i].email === userEmail.value &&
        user[i].password === userPass.value
      ) {
        document.getElementById("invalid").innerHTML = "User already exists";
        document.getElementById("invalid").classList.add("failed");
        return;
      }
    }

    user.push(newUser);
    localStorage.setItem("users", JSON.stringify(user));
    document.getElementById("invalid").innerHTML = "Success";
    document.getElementById("invalid").classList.add("success");
    setTimeout(function () {
      location.href = "index.html";
    }, 2000);
  } else if (
    userName.value === "" &&
    userEmail.value === "" &&
    userPass.value === ""
  ) {
    document.getElementById("invalid").innerHTML = "All inputs are required";
    document.getElementById("invalid").classList.add("failed");
  } else if (nameVal.test(userName.value) === false) {
    document.getElementById("invalid").innerHTML =
      "Username should be alphanumeric string that may include _ and - having a length of 3 to 16 characters.";
  } else if (emailVal.test(userEmail.value) === false) {
    document.getElementById("invalid").innerHTML = "Invalid Email";
  } else if (passVal.test(userPass.value) === false) {
    document.getElementById("invalid").innerHTML =
      "Password should consist of Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character.";
  }
}
