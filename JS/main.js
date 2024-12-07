
let inputField=document.querySelectorAll(".form-control");

inputField.addEventListener("focus",function(){
    inputField.style.backgroundColor = 'transparent';
});

inputField.addEventListener("blur",function(){
    inputField.style.backgroundColor = 'transparent';
});


let loginEmailInput = document.getElementById("loginEmail");
let loginPasswordInput = document.getElementById("loginPassword");
let loginBtn = document.getElementById("loginBtn");
let signupAnchor = document.getElementById("signupAnchor");
let userName = document.getElementById("userName");
let logOutBtn = document.getElementById("logOutBtn");

// Make an array to store data 

let users = [];

// Make condition to check if the value retrieved from localStorage is not null.

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}

// Make the sign in function .

function signIn() {
    let loginEmail = loginEmailInput.value;
    let loginPassword = loginPasswordInput.value;

    if (loginEmailInput.value == "" || loginPasswordInput.value == "") {
        alert("Please enter your email and password");
        return;
    }
    if(isCorrectEmailAndPassword(loginEmail,loginPassword)==true){
        window.location.href = "home.html";
    }else{
        alert("Incorrect email or password");
    }
}

// Make a function to check if the email and password are correct.

function isCorrectEmailAndPassword(email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            localStorage.setItem("userName", users[i].name);
            return true;
        }
    }
    return false;
}

// Make an event listener to the login button.

loginBtn.addEventListener("click",function(){
    signIn();
});

//  Make an event listener to the signup anchor.

signupAnchor.addEventListener("click",function(){
    window.location.href = "signup.html";
});