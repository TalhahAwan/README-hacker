// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What's the title of your project?",
    },


    {
        type: "input",
        name: "description",
        message: "Please describe your project.",
    },

    {
        type: "input",
        name: "installation",
        message: "Please provide a step by step description of how to install your project.",
    },

    {
        type: "input",
        name: "usage",
        message: "Please provide instructions or examples on how to use your project.",
    },

    {
        type: "input",
        name: "contribution",
        message: "Please add guidelines on how to contribute to your project.",
    },


    {
        type: "input",
        name: "test",
        message: "Please provide test instructions.",
    },

    {
        type: "list",
        name: "license",
        message: "Please select the license type.",
        choices: [
            "MIT License", "Mozilla Public License", "The Unlicense", "none"
        ]
    },

    {
        type: "input",
        name: "github",
        message: "Please provide your github id.",
    },

    {
        type: "input",
        name: "email",
        message: "Please provide your email.",
    },

    ])
};

// TODO: Create a function to write README file
const writeToFile = (data) => {
    fs.writeFileSync("./dist/README.md", generateMarkdown(data));
};

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((data) => writeToFile(data))
        .catch((error) => console.error(error))
};

// Function call to initialize app
init();
