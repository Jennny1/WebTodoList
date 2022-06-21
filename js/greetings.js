// const loginForm = document.querySelector("#login-form"); 반드시 id로
const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    // greeting.innerText = "Hello " + username;
    paintGreetings(username);
} 

 

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}


const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)


}else {
    // show the greeting
    paintGreetings(savedUsername);
}