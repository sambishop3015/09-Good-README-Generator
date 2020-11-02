const fs = require('fs');
const inquirer = require('inquirer');
//const { Choices } = require("inquirer/lib/objects/choices.js");
const { report } = require('process');
const util = require('util');
const generateMarkdown = require('./util/generateMarkdown');
const promptUser = require('./util/promptUser');

const writeFileAsync = util.promisify(fs.writeFile);

promptUser().then(function(data) {
    const markdown = generateMarkdown(data);
    return writeFileAsync("./generated/generatedREADME.md", markdown);
}).then(function () {
    console.log('Generating README.md ...');
    }).catch(function(err){
        console.log(err);
    })