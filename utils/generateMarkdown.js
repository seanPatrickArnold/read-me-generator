// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![alt text](https://img.shields.io/static/v1?label=License&message=${license}&color=green)`
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, data) {
  if (license === 'MIT') {
    return `## License
MIT License

Copyright (c) ${new Date().getFullYear()} ${data.username}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
  }
  else {
    return ''
  }

}

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

  return `# ${data.title}
${renderLicenseBadge(data.license[0])}
## Table of Contents
${sections.map(section => {
    return `
* [${capitalizeFirstLetter(section)}](#${section})`;
  })
      .join('')}

${sections
      .filter((section) => {
        return ['description', 'installation', 'usage', 'contributing', 'tests'].includes(section);
      })
      .map((section) => {
        return `
## ${capitalizeFirstLetter(section)}
${data[section]}`
      })
      .join('')}
${renderLicenseSection(data.license[0], data)}
## Questions
Username: ${data.username}

[Github Profile](https://github.com/${data.username})

Email: ${data.email}



`;
}

module.exports = generateMarkdown;
