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
        choices: ['Add a new Team Engineer', 'Add a new Team Intern', 'Exit, no new Team Members to add']
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
            const dataMgmt = generateHtml.generateHtmlManager(createdManager).trim();
            writeStream.write(dataMgmt);
            queryNextSelection();
        })
}

const getNewTeamEngineer = () => {
    inquirer
        .prompt(questionsTeamEngineer)
        .then ((engResponses) => {
            const createdTeamEngineer = new Engineer(engResponses.teamMemberEngineerName, engResponses.teamMemberEngineerId, engResponses.teamMemberEngineerEmail, engResponses.teamMemberEngineerGitHub)
            const dataEng = generateHtml.generateHtmlEngineer(createdTeamEngineer).trim();
            writeStream.write(dataEng);
            queryNextSelection();
        })
}

const getNewTeamIntern = () => {
    inquirer
        .prompt(questionsTeamIntern)
        .then((internResponses) => {
            const createdTeamIntern = new Intern(internResponses.teamMemberInternName, internResponses.teamMemberInternId, internResponses.teamMemberInternEmail, internResponses.teamMemberInternSchool)
            const dataIntern = generateHtml.generateHtmlIntern(createdTeamIntern).trim();
            writeStream.write(dataIntern);
            queryNextSelection();
        })
}

const queryNextSelection = () => {
    inquirer
        .prompt(questionsNewMember)
        .then ((queryResponse) => {
            if (queryResponse.newMemberChoice === 'Add a new Team Engineer') {
                getNewTeamEngineer();
                return;
            } else if (queryResponse.newMemberChoice === 'Add a new Team Intern') {
                getNewTeamIntern();
                return;
            } else if (queryResponse.newMemberChoice === 'Exit, no new Team Members to add') {
                writeStream.write(`
                    </div>
                </body>
            </html>`)
                writeStream.end()
                console.log(`THANK YOU FOR YOUR SUBMISSION\nYour Team Profile HTML has been successfully generated`);
            } else {
                console.log(`THANK YOU FOR YOUR SUBMISSION`);
            }
        })
}

const writeStream = fs.createWriteStream('./dist/teamprofile.html');

// --- START --- //

console.log(`Welcome to the Team Profile Generator\nPlease enter the team manager's information`)

writeStream.write(generateHtml.generateHtmlHead())
getTeamManager();
