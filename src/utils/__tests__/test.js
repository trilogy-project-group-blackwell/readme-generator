const generateMarkdown = require('../generateMarkdown/index');
const { email, github } = require('../../config.json');
const {
	renderLicenseBadge,
	renderLicenseLink,
	renderLicenseSection,
} = require('../generateMarkdown/license');
const mockAnswers = {
	github,
	email,
	title: 'title',
	description: 'description',
	license: 'MIT',
	installation: 'yarn install',
	test: 'yarn test',
	usage: 'a lot',
	contributing: 'not much',
};

const mockMarkdown = `# title
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

description

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
yarn install
\`\`\`

## Usage

a lot

## License

This project is licensed under the MIT license.
  
## Contributing

not much

## Tests

To run tests, run the following command:

\`\`\`
yarn test
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${github}](https://github.com/${github}/).

`;
describe('Tests utils', () => {
	test('renderLicenseBadge', () => {
		const input = renderLicenseBadge();
		expect(input).toBe('');
	});
	test('renderLicenseLink', () => {
		const input = renderLicenseLink();
		expect(input).toBe('');
	});
	test('renderLicenseSection', () => {
		const input = renderLicenseSection();
		expect(input).toBe('');
	});
	test('generateMarkdown', () => {
		const input = generateMarkdown(mockAnswers);
		expect(input).toBe(mockMarkdown);
	});
});
