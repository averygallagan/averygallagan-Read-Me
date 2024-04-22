// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of the Project?'
},
{
    type: 'input',
    name: 'description',
    message: 'Type a description of the Project?'
},
{
    type: 'input',
    name: 'installation',
    message: 'What is needed to run the Project?'
},
{
    type: 'input',
    name: 'Usage',
    message: 'What is the title of the Project?'
},
{
    type: 'input',
    name: 'Contribution',
    message: 'What is the title of the Project?'
},
{
    type: 'input',
    name: 'test',
    message: 'What is the title of the Project?'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log('successfully created ReadMe')
    })
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
