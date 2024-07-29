// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please select a license.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('Error writing file', err);
        } else {
            console.log('File created successfully');
        }
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
