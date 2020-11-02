const inquirer = require('inquirer');

function promptUser() {
    return inquirer.prompt([
        // array of questions for user
        {
            type: "input",
            name: "author",
            message: "What is the author's name?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: 'input',
            message: 'What is the title of this project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Describe this project?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installations'
        },
        {
            type: 'input',
            message: 'Usage information?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What are the contribution quidlines?',
            name: 'contribute'
        },
        {
            type: 'input',
            message: 'How to test?',
            name: 'tests'
        },
        {
            type: 'list',
            message: 'What is the license for this project?',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        }
    ]);
}

module.exports = promptUser;