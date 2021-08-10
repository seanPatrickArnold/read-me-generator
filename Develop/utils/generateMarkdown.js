// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

//Create function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = [
    'description',
    'installation',
    'usage',
    'contributing',
    'tests',
    'license',
    'questions'
  ]

  return `<h1>${data.title}</h1>
  <img src='https://img.shields.io/static/v1?label=License&message=${data.license}&color=green'></img>
<h2>Table of Contents</h2>
<ul>${sections.map(section => {
    return `
  <li><a href='#${section}'>${capitalizeFirstLetter(section)}</a></li>`;
  })
      .join('')}
</ul>


${sections
      .filter((section) => {
        return ['description', 'installation', 'usage', 'contributing', 'tests'].includes(section);
      })
      .map((section) => {
        return `
<h2 id='${section}'>${capitalizeFirstLetter(section)}</h2>
<p>${data[section]}</p>`
      })
      .join('')}
<h2 id='questions'>Questions</h2>
<p>Username: ${data.username}</p>
<p>Email: ${data.email}</p>
<h2 id='license'>License</h2>
<p>License Provided by ${data.license}.</p>



`;
}

module.exports = generateMarkdown;
