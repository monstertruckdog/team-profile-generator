const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml');
const { listenerCount } = require('events');
const employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const { ENGINE_METHOD_RAND } = require('constants');
const { create } = require('domain');

const questionsTeamManager = [
    {
        type: 'input',
        name: 'teamManagerName',
        message: 'Enter the name of the team manager'
    },
    {
        type: 'input',
        name: 'teamManagerEmployeeId',
        message: 'Enter the employee ID of the team manager'
    },
    {
        type: 'input',
        name: 'teamManagerEmail',
        message: 'Enter the email address of the team manager'
    },
    {
        type: 'input',
        name: 'teamManagerOfficeNum',
        message: 'Enter the office number of team manager'
    }
]

const questionsNewMember = [
    {
        type: 'list',
        name: 'newMemberChoice',
        message: 'Select one of the following options',
        choices: ['Add a new Team Engineer', 'Add a new Team Intern', 'Team Complete! No new Team Members to add']
    }
]

const questionsTeamEngineer = [
    {
        type: 'input',
        name: 'teamMemberEngineerName',
        message: 'Enter the name of the team engineer'
    },
    {
        type: 'input',
        name: 'teamMemberEngineerId',
        message: 'Enter the employee ID of the engineer'
    },
    {
        type: 'input',
        name: 'teamMemberEngineerEmail',
        message: 'Enter the email address of the engineer'
    },
    {
        type: 'input',
        name: 'teamMemberEngineerGitHub',
        message: 'Enter the GitHub username of the engineer'
    }
]

const questionsTeamIntern = [
    {
        type: 'input',
        name: 'teamMemberInternName',
        message: 'Enter the name of the team Intern'
    },
    {
        type: 'input',
        name: 'teamMemberInternId',
        message: 'Enter the employee ID of the Intern'
    },
    {
        type: 'input',
        name: 'teamMemberInternEmail',
        message: 'Enter the email address of the Intern'
    },
    {
        type: 'input',
        name: 'teamMemberInternSchool',
        message: 'Enter the name of the school where the Intern is enrolled'
    }
]

const getTeamManager = () => {
    inquirer
        .prompt(questionsTeamManager)
        .then((mgmtResponses) => {
            const createdManager = new Manager(mgmtResponses.teamManagerName, mgmtResponses.teamManagerEmployeeId, mgmtResponses.teamManagerEmail, mgmtResponses.teamManagerOfficeNum);
            console.log(`MANAGER NAME:  ${createdManager.getName(mgmtResponses)}`);
            console.log(`MANAGER ID:  ${createdManager.getId(mgmtResponses)}`)
            console.log(`MANAGER EMAIL:  ${createdManager.getEmail(mgmtResponses)}`)
            console.log(`MANAGER OFFICE NUMBER:  ${createdManager.getOfficeNum(mgmtResponses)}`)
            console.log(`MANAGER ROLE:  ${createdManager.getRole()}`)
            // function to add createdManager data to HTML?
            queryNextSelection();
        })
}

const getNewTeamEngineer = () => {
    inquirer
        .prompt(questionsTeamEngineer)
        .then ((engResponses) => {
            const createdTeamEngineer = new Engineer(engResponses.teamMemberEngineerName, engResponses.teamMemberEngineerId, engResponses.teamMemberEngineerEmail, engResponses.teamMemberEngineerGitHub)
            console.log(`ENGINEER NAME:  ${createdTeamEngineer.getName(engResponses)}`)
            console.log(`ENGINEER ID:  ${createdTeamEngineer.getId(engResponses)}`)
            console.log(`ENGINEER EMAIL:  ${createdTeamEngineer.getEmail(engResponses)}`)
            console.log(`ENGINEER GITHUB:  ${createdTeamEngineer.getGitHub(engResponses)}`)
            console.log(`ENGINEER ROLE:  ${createdTeamEngineer.getRole()}`)
            // function here?
            queryNextSelection();
        })
}

const getNewTeamIntern = () => {
    inquirer
        .prompt(questionsTeamIntern)
        .then((internResponses) => {
            const createdTeamIntern = new Intern(internResponses.teamMemberInternName, internResponses.teamMemberInternId, internResponses.teamMemberInternEmail, internResponses.teamMemberInternSchool)
            console.log(`INTERN NAME:  ${createdTeamIntern.getName(internResponses)}`)
            console.log(`INTERN ID:  ${createdTeamIntern.getId(internResponses)}`)
            console.log(`INTERN EMAIL:  ${createdTeamIntern.getEmail(internResponses)}`)
            console.log(`INTERN SCHOOL NAME:  ${createdTeamIntern.getSchoolName(internResponses)}`)
            console.log(`ENGINEER ROLE:  ${createdTeamIntern.getRole()}`)
            queryNextSelection();
        })
}

const queryNextSelection = () => {
    inquirer
        .prompt(questionsNewMember)
        .then ((queryResponse) => {
            if (queryResponse.newMemberChoice === 'Add a new Team Engineer') {
                getNewTeamEngineer();
                //queryNextSelection();
                return;
            } else if (queryResponse.newMemberChoice === 'Add a new Team Intern') {
                getNewTeamIntern();
                //queryNextSelection();
                return;
            } else {
                console.log(`THANK YOU FOR YOUR SUBMISSION\nYour Team Profile HTML has been successfully generated`);
                // function here for writing HTML
            }
            //queryNextSelection();
        })
}


/*
const createdEmployee = new Employee();
console.logt(..)

const name = createdEmployee.getName()
*/

/*
  askToPlayAgain() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Play Again?"
        }
      ])
      .then(val => {
        // If the user says yes to another game, play again, otherwise quit the game
        if (val.choice) {
          this.play();
        } else {
          this.quit();
        }
      });
  }

  */

  /*
    quit() {
    console.log("\nGoodbye!");
    process.exit(0);
  }
*/

function writeToFile(htmlContent) {
    fs.appendFile('./dist/teamprofile.html', htmlContent, (err) =>
      err ? console.error(err) : console.log('Congratulations!\nYour HTML file has been generated successfully\n\nThank you for using Professional README Generator'));
}

console.log(`Welcome to the Team Profile Generator\nPlease enter the team manager's information`)
getTeamManager();
