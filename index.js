let SignInPage = document.getElementById("sign-in-page");
let SignUpPage = document.getElementById("sign-up-page");
let signInBtn  = document.getElementById("sign-in-btn");
let signUpBtn  = document.getElementById("sign-up-btn");

signInBtn.onclick = function(){
    SignInPage.style.opacity = '1';
    SignUpPage.style.opacity = '0';
    SignInPage.style.transform = "translateX(0)";
    SignUpPage.style.transform = "translateX(430px)";
    signInBtn.classList.toggle("active-link");
    signUpBtn.classList.toggle("active-link");
} 

signUpBtn.onclick = function(){
    SignUpPage.style.opacity = '1';
    SignInPage.style.opacity = '0';
    SignUpPage.style.transform = "translateX(0)";
    SignInPage.style.transform = "translateX(-430px)";
    signUpBtn.classList.toggle("active-link");
    signInBtn.classList.toggle("active-link")
} 

