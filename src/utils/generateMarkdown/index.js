const {
	renderLicenseBadge,
	renderLicenseLink,
	renderLicenseSection,
} = require('./license');
const { email, github } = require('../../config.json');

/**
 * Expected Answers
 * @typedef {Object} Answers
 * @property {string} contributing - contribution instructions
 * @property {string} description - project description
 * @property {string} email - owner/maintainer's email
 * @property {string} github - owner/maintainer's github account
 * @property {string} installation - command to run installation
 * @property {string} license - license selection
 * @property {string} test - command to run tests
 * @property {string} title - project title
 * @property {string} usage - text to descibe project usage
 */

/**
 * Returns markdown text based on answers selected
 * @param {Answers} [answers] - inquirer prompt answers
 * @return {string} - returns markdown template for file generation
 */
function generateMarkdown({
	contributing,
	description,
	installation,
	license,
	test,
	title,
	usage,
}) {
	return `# ${title}
${renderLicenseBadge(license)}

## Description

${description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${installation}
\`\`\`

## Usage

${usage}

${renderLicenseSection(license)}
  
## Contributing

${contributing}

## Tests

To run tests, run the following command:

\`\`\`
${test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${github}](https://github.com/${github}/).

`;
}

module.exports = generateMarkdown;
