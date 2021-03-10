// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    //each switch statements gets its own shield out of the list selected in the terminal 
    case "MIT":
      return "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
      break;

    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;

    case "Boost":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;

    default:
      console.log("You have to select a license!");
      break;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://choosealicense.com/licenses/mit/";
      break;
    case "Apache":
      return "https://choosealicense.com/licenses/apache-2.0/#"
      break;
    case "Boost":
      return "https://choosealicense.com/licenses/bsl-1.0/"
      break;
    default:
      console.log("");
      break;
  };
};


//TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return ` 
# ${data.title}
## Description
  
${data.description}
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)

  ## License
  This project is licensed under the ${data.license} license.
  
  ${renderLicenseLink(data.license)};
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  ${data.install}
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

  ## Usage
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  ${data.usage}

  
  ## Contributing
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  ${data.contributing}

  ## Test
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  ${data.test} 
  

  
  `;

}
module.exports = generateMarkdown;