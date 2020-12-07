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

// console.log(generateMarkdown({
//   title: "Testing",
//   description: "Testing",
//   tableOfContents: "One, Two, Three",
//   installation: "NPM",
//   usage: "see my video",
//   license: "no idea"
// }));

module.exports = generateMarkdown;
