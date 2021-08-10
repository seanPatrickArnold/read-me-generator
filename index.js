// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your title? (Required)',
        default: 'Title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your description? (Required)',
        default: 'An app.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter your description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is your installation instruction? (Required)',
        default: 'Install.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter your installation instruction!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your usage information? (Required)',
        default: 'Use.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your usage information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are your contribution guidelines? (Required)',
        default: 'Contribute.',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please enter your contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are your test instructions? (Required)',
        default: 'Test.',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter your test instructions!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What is the project license? (Check one)',
        choices: ['MIT', 'Not-MIT'],
        default: ['MIT'],
        validate: licenseInput => {
            console.log(licenseInput);
            if (licenseInput && licenseInput.length === 1) {
                return true;
            } else {
                if (!licenseInput) {
                    console.log('Please enter your test instructions!');
                    return false;
                }
                else if (licenseInput.length > 1) {
                    console.log('Please select only one license!');
                    return false;
                }
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your username? (Required)',
        default: 'username',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        default: 'email@email.email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
const writeToFile = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    const promptUser = () => {
        return inquirer.prompt(questions);
    }

    promptUser()
        .then(data => generateMarkdown(data))
        .then(data => {
            return writeToFile('./dist/README.md', data)
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
