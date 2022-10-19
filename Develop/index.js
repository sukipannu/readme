// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
function promptUser (){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Write a description of your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process:"
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license:",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open",
            ]
        },
        {
            type: "input",
            name: "contributer",
            message: "Name the contributors of this project:"
        },
        {
            type: "input",
            name: "questions",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue?"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email:"
        }
    ]);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('sucess')
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
