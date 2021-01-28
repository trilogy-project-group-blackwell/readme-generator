const fs = require('fs');
const path = require('path');

function writeToFile(fileName, data) {
	return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

module.exports = writeToFile;
