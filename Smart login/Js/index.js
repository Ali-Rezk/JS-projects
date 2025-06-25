var userEmail = document.getElementById("email");
var userPass = document.getElementById("pass");

var user = [];

function signin() {
  user = JSON.parse(localStorage.getItem("users"));
  document.getElementById("invalid").classList.remove("d-none");

  for (i = 0; i < user.length; i++) {
    if (
      user[i].email === userEmail.value &&
      user[i].password === userPass.value
    ) {
      var userName = user[i].name;
      document.getElementById("home").classList.remove("d-none");
      document.getElementById("signin").classList.add("d-none");
      document.getElementById("username").innerHTML = `Welcome ${userName}`;
      document.getElementById("invalid").classList.add("d-none");
    } else if (userEmail.value === "" && userPass.value === "") {
      document.getElementById("invalid").innerHTML = "All inputs are required";
      document.getElementById("invalid").classList.add("failed");
    } else if (user[i].email !== userEmail.value) {
      document.getElementById("invalid").innerHTML = "Invalid Email";
      document.getElementById("invalid").classList.add("failed");
    } else if (user[i].password !== userPass.value) {
      document.getElementById("invalid").innerHTML = "Invalid Password";
      document.getElementById("invalid").classList.add("failed");
    }
  }
}

function logout() {
  document.getElementById("home").classList.add("d-none");
  document.getElementById("signin").classList.remove("d-none");
}
