/**
 * Returns a license badge based on which license is selected
 * If there is no license, return an empty string
 * @param {string} [license="None"] - used to create license img in README
 * @return {string} - will return license img or empty string
 */
function renderLicenseBadge(license = "None") {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

/**
 * Returns a license link based on which license is selected
 * If there is no license, return an empty string
 * @param {string} [license="None"] - used to create license link in README ToC
 * @return {string} - will return license link or empty string
 */
function renderLicenseLink(license = "None") {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

/**
 * Returns a license section based on which license is selected
 * If there is no license, return an empty string
 * @param {string} [license="None"] - used to create license section in README
 * @return {string} - will return license section or empty string
 */
function renderLicenseSection(license = "None") {
  if (license !== "None") {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return "";
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
