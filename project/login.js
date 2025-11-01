const signUpbutton = document.getElementById('signUp');
const signInbutton = document.getElementById('signIn');
const container = document.getElementById('conatiner');

signUpButton.addEventListener('click',() => {
   container.classList.add("right-panel-active");
});
signInButton.addEventListener('click',() => {
   container.classList.remove("right-panel-active");
});