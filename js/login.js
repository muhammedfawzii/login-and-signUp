var signEmail = document.getElementById("signInEmail");
var signPassword = document.getElementById("signInPassword");
var signInBtn = document.getElementById("signInBtn");
var note = document.getElementById("note");
var inCorrect = document.getElementById("inCorrect");
var store = JSON.parse(localStorage.getItem("signUp"));
console.log(store);

signInBtn.addEventListener("click", function () {
  if (signEmail.value == "" || signPassword.value == "") {
    note.innerHTML = "All inputs are required";
    inCorrect.innerHTML = "";
  } else {
    for (let i = 0; i < store.length; i++) {
      if (
        signEmail.value == store[i].email &&
        signPassword.value == store[i].password
      ) {
        window.location = "./home.html";
        localStorage.setItem("name", store[i].name);
      } else {
        inCorrect.innerHTML = "please email or password is invalid";
        note.innerHTML = "";
      }
    }
  }
});

// signInBtn.addEventListener("click",function(){
//     for(let i = 0; i < store.length; i++){
//         if(signEmail.value == store[i].email && signPassword.value == store[i].password){
//             window.location = "./home.html"
//         }else{
//             alert("errorrrrr")
//         }
//     }
// })
