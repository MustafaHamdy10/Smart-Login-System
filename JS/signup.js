
let signupBtn = document.getElementById("signupBtn");
let signupNameInput = document.getElementById("signupName");
let signupEmailInput = document.getElementById("signupEmail");
let signupPasswordInput = document.getElementById("signupPassword");
let loginAnchor = document.getElementById("loginAnchor");

// Make an array to store data of new users .

let newUsers = [];

// Make condition to check if the value retrieved from localStorage is not null.

if (localStorage.getItem("newUsers") != null) {
    newUsers = JSON.parse(localStorage.getItem("newUsers"));
}

// Make a function to check the validation of the email .

function isValidEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Make a function to check the existence of the new email .

function isNewEmail(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            return false;
        }
    }
    return true;
}

// Make an fuction to sign up a new user .

function signUp() {

    // Make an object

    let user = {
        name: signupNameInput.value,
        email: signupEmailInput.value,
        password: signupPasswordInput.value,
    };

    // Make a condition to check if the value retrieved from localStorage is not null.

    if (signupNameInput.value === "" || signupEmailInput.value === "" ||
        signupPasswordInput.value === "") {
        alert("Please enter your name, email and password");
        return;
    }
    if(isValidEmail(signupEmailInput.value)==true && isNewEmail(signupEmailInput.value)==true){
        newUsers.push(user);
        localStorage.setItem("newUsers", JSON.stringify(newUsers));
        clearForm();
        alert("Sign up successfully");
        // window.location.href = "home.html";
    }else{
        alert("Invalid email or email already exists");
    }
}

// Make a event listener to the signup button.

signupBtn.addEventListener("click",function(){
    signUp();
});


// Make a function to clear data inputs

function clearForm(){
    signupNameInput.value="";
    signupEmailInput.value="";
    signupPasswordInput.value="";
}

// Make a event listener to the login anchor.

loginAnchor.addEventListener("click",function(){
    window.location.href = "index.html";
});