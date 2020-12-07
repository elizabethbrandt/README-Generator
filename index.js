const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// array of questions for user
const questions = [

    {
        name: 'title',
        type: 'input',
        message: 'What is the title of the project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'What is the description of the project?'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install the project?',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What are the instructions and/or examples for the use of the project?',
    },
    {
        name: 'license',
        type: 'list',
        message: 'What license did you use for the project?',
        choices: ['Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'GNU General Public License 2.0', 'Mozilla Public License', 'The Unlicense']
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

    inquirer
        .prompt(questions)
        .then(response => {

            console.log(response);

            // const content = generateMarkdown(response);

        });

}

// function call to initialize program
init();
