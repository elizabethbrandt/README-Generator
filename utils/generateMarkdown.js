// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ${generateBadge(data.license)}

  ${generateDescription(data.description)}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

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

function generateBadge(license) {

  switch (license) {

    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

    case 'Boost Software License 1.0':
      return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;

    case 'GNU General Public License 2.0':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;

    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    case 'Mozilla Public License':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

    case 'The Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;

    default:
      return;
      
  }

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
