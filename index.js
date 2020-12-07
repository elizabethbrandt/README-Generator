const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'Please enter the names of all collaborators on this project, separated by commas.',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'If you wrote any tests for your project, please list them here.',
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?',
    },

];

// function to write README file
function writeToFile(fileName, data) {

    const content = generateMarkdown(data);

    fs.writeFile(fileName, content, (err) => {

        if(err) console.log(err);

    })
    
}

// function to initialize program
function init() {

    inquirer
        .prompt(questions)
        .then(response => {

            writeToFile('OUTPUT_README.md', response)

        });

}

// function call to initialize program
init();
