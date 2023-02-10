console.log("I am a developer");

// different ways to set event on elements
// option1 : directly set event on the html elements 
// <button onclick = "document.body.style.color = 'red' "></button>

//option 2: add onclick function
// function to make bgColor blue when
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 3(1): add onclick function another way.
const makeRedButton = document.getElementById("button-red");
// see. here function is not called. it is set. do not call the function here.
makeRedButton.onclick = makeRed;


// function to make background red
function makeRed() {
    document.body.style.backgroundColor = "red";
}

// option 3(2): write the function directly with onclick

const makePurpleButton = document.getElementById("button-purple");
// here, we did not give any name to the function. we can give name if we want
makePurpleButton.onclick = function () {
    document.body.style.backgroundColor = 'purple';
};