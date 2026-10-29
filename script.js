console.log("Hello from script.js");

let clubname = "Watch Party";
console.log("Welcome to the "+ clubname);

let meetingDay = "Monday (new weekly overview)";
console.log("We meet on: " + meetingDay);

function sayHi() {
    console.log("Hi there! Welcome to the Watch Party!");
}

sayHi();

function sayBye() {
    console.log("Goodbye! Thanks for your interest in our Watch Party!");
}

sayBye();
sayBye();

let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
    nextMeeting.textContent = "Our next watch party date and time are still being planned. Join the crew to stay updated!"; 
}

nextButton.addEventListener("click", showNextMeeting);

let signupForm = document.querySelector("#signupForm");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.querySelector("#name").value.trim();
    let favorite = document.querySelector("#favorite").value;
    let signupMessage = document.querySelector("#signupMessage");

    signupMessage.textContent =
        "Welcome to the crew, " + name +"! We can't wait to watch " + favorite +" with you!";
});