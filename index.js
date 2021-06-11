const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml');
const { listenerCount } = require('events');
const employee = require('./lib/Employee')
const Manager = require('./lib/Manager')

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
        message: 'Enter the name of the team engineer'
    },
    {
        type: 'input',
        name: 'teamMemberInternId',
        message: 'Enter the employee ID of the engineer'
    },
    {
        type: 'input',
        name: 'teamMemberInternEmail',
        message: 'Enter the email address of the engineer'
    },
    {
        type: 'input',
        name: 'teamMemberInternGitHub',
        message: 'Enter the GitHub username of the engineer'
    }
]

const getTeamManager = () => {
    inquirer
        .prompt(questionsTeamManager)
        .then((mgmtResponses) => {
            // teamManagerName
            // teamManagerEmployeeId
            // teamManagerEmail
            // teamManagerOfficeNum
            const createdManager = new Manager(mgmtResponses.teamManagerName, mgmtResponses.teamManagerEmployeeId, mgmtResponses.teamManagerEmail, mgmtResponses.teamManagerOfficeNum);
            console.log(`MANAGER NAME:  ${createdManager.name}`);
            // return mgmtResponses
        })
}

const getNewTeamEngineer = () => {
    inquirer
        .prompt(questionsTeamEngineer)
        .then ((engResponses) => {
            return engResponses
        })
}

const getNewTeamIntern = () => {
    inquirer
        .prompt(questionsTeamIntern)
        .then((internResponses) => {
            return internResponses
        })
}

const queryNextSelection = () => {
    inquirer
        .prompt(questionsNewMember)
        .then ((queryResponse) => {
            if (queryResponse.newMemberChoice === 'Add a new Team Engineer') {
                getNewTeamEngineer();
                queryNextSelection();
            } else if (queryResponse.newMemberChoice === 'Add a new Team Intern') {
                getNewTeamIntern();
                queryNextSelection();
            } else {
                console.log(`THANK YOU FOR YOUR SUBMISSION\nYour Team Profile HTML has been successfully generated`);
                // function here for writing HTML
            }
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

getTeamManager();