const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");
const logoutButton = logoutForm.querySelector("button");

// 브랜치 연습
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function onLogoutClick(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    location.reload();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    logoutButton.addEventListener("click", onLogoutClick);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}