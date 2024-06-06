// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

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
    name: 'usage',
    message: 'What is the usage of the Project?'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Who contributed to the project?'
},
{
    type: 'input',
    name: 'test',
    message: 'What are the tests of the Project?'
},
{
    type: 'input',
    name: 'github',
    message: 'What is your github username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},
{
    type: 'list',
    name: 'license',
    message: 'What is license you used for your project?',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
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
 inquirer.prompt(questions).then(answers => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md',readmeContent);
 });
}

// Function call to initialize app
init();
