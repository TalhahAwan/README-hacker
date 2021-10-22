// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return "";
  } else {
    return `- [License](#license)`;

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return "";
  } else if (license === "MIT License") {
    return `- [License](#license)`;

  }else if (license === "Mozilla Public License") {

  }else if (license === "The Unlicense") {

  }else {}

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}

    ## Description
    ${data.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage Information](#usage)
    - [Contribution Guidelines](#contribution)
    - [Test Instructions](#tests)
    - [Questions](#questions)
    ${renderLicenseLink(data.license)}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contribution
    ${data.contribution}

    ## Tests
    ${data.test}

    ## Questions
    GitHub: [${data.github}](${data.github})
    Email : [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;