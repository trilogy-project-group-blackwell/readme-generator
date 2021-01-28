const inquirer = require('inquirer');
const { questions } = require('./constants');
const { generateMarkdown, writeToFile } = require('./utils');

async function main() {
	try {
		const answers = await inquirer.prompt(questions);
		console.info('Generating README...');
		writeToFile('README.md', generateMarkdown(answers));
		process.exit(0);
	} catch (error) {
		console.error('ERROR :: ', error);
		process.exit(1);
	}
}

main();
