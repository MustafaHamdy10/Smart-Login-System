
let logOutBtn=document.getElementById("logOutBtn");
let userName=document.getElementById("userName");
let userWelcome=document.getElementById("userName");

userWelcome.innerHTML=`"Welcome" ,${localStorage.getItem("userName")}`;

logOutBtn.addEventListener("click",function(){
    window.location.href = "index.html";
});