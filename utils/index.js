// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title?",
    },
    {
        type: "input",
        name: "contributing",
        message: "How can you contribute to this repo?",
    },
    {
        type: "input",
        name: "description",
        message: "What is your project about?",
    },
    {
        type: "list",
        name: "license",
        message: "What is license is the project made under?",
        choices: ["MIT", "APACHE", "Boost"],
    },
    {
        type: "input",
        name: "usage",
        message: "Are you okay with your repo being public?",
    },
    {
        type: "input",
        name: "test",
        message: "How to start the application?",
    },
];

// TODO: Create a function to write README file
//This uses ES6 syntax to catch an error. CHeck out the try/ catch method 
function writeToFile(data) {
    fs.writeFile("README.md", data, (err) => err ? console.log(err) : console.log('No Errors'));
}

// TODO: Create a function to initialize app
//I paused the Homework Start Up ;)
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log("Generating ReadMe...");
        writeToFile(generateMarkdown(data));
});
}
// Function call to initialize app
init();
