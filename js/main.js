var inputName = document.getElementById("name");
var inputMail = document.getElementById("email");
var inputPass = document.getElementById("password");
var signBtn = document.getElementById("btn");
var wrongNote = document.getElementById("wrong");
var wrongMail = document.getElementById("wrongMail");
var success = document.getElementById("success");

var signIn = [];
if (localStorage.getItem("signUp") !== null) {
  signIn = JSON.parse(localStorage.getItem("signUp"));
}

signBtn.addEventListener("click", function () {
  if (exist() == true) {
    wrongMail.classList.remove("d-none");
    wrongNote.classList.add("d-none");
    success.classList.add("d-none");
  } else if (
    inputName.value == "" ||
    inputMail.value == "" ||
    inputPass.value == ""
  ) {
    wrongNote.classList.replace("d-none", "d-block");
    wrongMail.classList.add("d-none");
    success.classList.add("d-none");
  } else {
    var sign = {
      name: inputName.value,
      email: inputMail.value,
      password: inputPass.value,
    };
    signIn.push(sign);
    localStorage.setItem("signUp", JSON.stringify(signIn));
    clearInputs();
    success.classList.remove("d-none");
    wrongMail.classList.add("d-none");
    wrongNote.classList.add("d-none");
  }
});

function clearInputs() {
  inputName.value = null;
  inputMail.value = null;
  inputPass.value = null;
}
function exist() {
  for (var i = 0; i < signIn.length; i++) {
    if (signIn[i].email == inputMail.value) {
      return true;
    }
  }
}
