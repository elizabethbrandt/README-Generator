// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ${generateDescription(data.description)}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  ${generateInstallation(data.installation)}

  ${generateUsage(data.usage)}

  ${generateLicense(data.license)}

  ${generateContributing(data.contributing)}
  
  ${generateTests(data.tests)}

  ## Questions

  If you have additional questions, please feel free to explore my GitHub profile or send me an email.
  
  ${generateGitHub(data.github)}

  ${generateEmail(data.email)}
  
  `;
}

function generateDescription(description) {

  return `## Description

  ${description}`;
  
}

function generateInstallation(installation) {

  return `## Installation

  ${installation}`;

}

function generateUsage(usage) {

  return `## Usage

  ${usage}`;

}

function generateLicense(license) {

  return `## License

  ${license}`;
  
}

function generateContributing(contributing) {

  return `## Contributing

  ${contributing}`;
  
}

function generateTests(tests) {

  return `## Tests

  ${tests}`;
  
}

function generateGitHub(github) {

  return `* [GitHub: ${github}](https://github.com/${github})`;
  
}

function generateEmail(email) {

  return `* [Email: ${email}](mailto:${email})`;
  
}

module.exports = generateMarkdown;
