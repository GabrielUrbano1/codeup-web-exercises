import { randomGreeting } from "./greeting-logic.js";

const form = document.getElementById("userName");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userInput = document.getElementById("name").value;

    output.innerHTML = `${randomGreeting()} ${userInput}`;
});