const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [

    {
        type: 'input',
        message: '',
        name: 'title',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    }

];

inquirer
    .prompt(questions)

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

    inquirer
        .prompt(questions)
        .then(response => {

            const content = generateMarkdown(response);

        })

}

// function call to initialize program
init();