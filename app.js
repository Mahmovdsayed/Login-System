let userName = document.getElementById('userName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let warning = document.getElementById("alert");
let success = document.getElementById("success");
let newalert = document.getElementById("new");
let LoginPassword = document.getElementById("LoginPassword");
let loginEmail = document.getElementById("loginEmail");
let newErr = document.getElementById('newErr');
let usermain = document.getElementById('demo');
let logOut = document.getElementById("logout")
let userData = [];
 if(localStorage.getItem("newUser") !=  null) {
    userData = JSON.parse(localStorage.getItem('newUser'))
 }
function getData() {
    user = {
        username : userName.value,
        userEmail : email.value,
        userPassword : password.value
    }
    if ( userName.value == "" || email.value == "" || password.value == "") {
        warning.classList.remove("d-none");
        success.classList.add('d-none')
    } else {
       if(Form() == true) {
        newalert.classList.remove('d-none');
        success.classList.add('d-none')
       }else{
        newalert.classList.add('d-none');
        warning.classList.add("d-none");
        success.classList.remove('d-none')
        userData.push(user);
        localStorage.setItem("newUser", JSON.stringify(userData))
        clear()
       } 
    }
}
function clear() {
    userName.value = "";
    email.value = "";
    password.value = "";
 
}
function Form() {
    for (let i = 0; i < userData.length; i++) {
        if(userData[i].userEmail == email.value || userData[i].username == userName.value) {
            return true;
        }
        
    }
}

function logIn(){
       if( check() == true) {
        location.href = "./home.html"
    } else {
            newErr.classList.remove('d-none')
        }
}
function check(){
    for (let i = 0; i < userData.length; i++) {
        if( userData[i].userEmail == loginEmail.value && userData[i].userPassword == LoginPassword.value){
            localStorage.setItem("userName", userData[i].username)
          
            return true;
        }
        
    }
}
if(localStorage.getItem("userName") != null) {
    usermain.innerHTML = `Welcome  ${localStorage.getItem("userName")} 👋`
}else {
   
}
function removeUser() {
    localStorage.removeItem("userName");
    location.href = "./index.html"
}