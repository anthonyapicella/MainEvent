const inquirer = require('inquirer');
const fs = require('fs');

const html = `     `

inquirer 
 .prompt ([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Where are you from?',
        name: 'location',
      }, 
      {
        type: 'input',
        message: 'What is your favorite food?',
        name: 'food',
      },
      {
        type: 'input',
        message: 'What is your Github username',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your LinkedIn Url',
        name: 'LinkedIn',
      },

 ])
 .then((response) => {
    console.log(response)
    const answers = `${response.username}
    ${response.location}
    food:${response.food}
    github:${response.github}
    LinkedIn: ${response.LinkedIn}`

    console.log(answers)
    fs.writeFile('index.html', answers, err => {
        err ? console.log(err) : console.log("we did it");
    })
 });