const core = require("@actions/core");

const firstGreeting = getInput("first-greeting");
const secondGreeting = getInput("second-greeting");
const thirdGreeting = getInput("third-greeting");

console.log('Hello ${firstGreeting}');
console.log('Hello ${secondGreeting}');

if (thirdGreeting) {
    console.log('Hello ${thirdGreeting}');
}