function generateMarkdown(data) {
    let badge = "";
    if (data.license == "MIT") {
        badge = "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)"
    } else if (data.license == "APACHE 2.0") {
        badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    } else if (data.license == "GPL 3.0") {
        badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    } else if (data.license == "BSD 3") {
        badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
    }



return`# ${data.title}  ${badge}
${data.description}
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
### Installation:
In order to install the necessary dependencies, open the console and run the following:
\`\`\`${data.installations}\`\`\`
### Usage:
${data.usage}
### License:
This project is licensed under:
${data.license}
### Contributing:
${data.contribute}
### Tests:
In order to test open the console and run the following:
\`\`\`${data.tests}\`\`\`
### Questions:
If you have any questions contact me on [GitHub](https://github.com/${data.username}) or contact 
${data.author} at ${data.email}
![picture](https://github.com/${data.username}.png?size=80)
        
`
}

module.exports = generateMarkdown;
