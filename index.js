const inquirer = require('inquirer');
const fs = require('fs');


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
        message: 'What is your Github username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your LinkedIn Url?',
        name: 'LinkedIn',
      },

 ])
 .then((response) => {
    console.log(response)
    const answers = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>My Portfolio</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <style>
    
  </style>
</head>
<body>

<div class="jumbotron bg-dark">
  <div class="container text-center">
    <h1>${response.username} Portfolio</h1>      
    <p>I am located in ${response.location}.</p>
  </div>
</div>
  
<div class="container-fluid bg-3 text-center">    
  <h3>Contact Me!</h3><br>
  <ul class="list-group">
      <li>My GitHub username is ${response.github}.</li>
    <li>My LinkedIn URL is ${response.LinkedIn}.</li>
    <li>My favorite food is ${response.food}.</li>
</ul>
  
</div><br>

</div>

</body>
</html>`

    console.log(answers)
    fs.writeFile('index.html', answers, err => {
        err ? console.log(err) : console.log("we did it");
    })
 });