const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
const generateHtml = require('./utils/generateHtml');
const { listenerCount } = require('events');

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
        type: list,
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

function init() {
    inquirer
      .prompt(questionsTeamManager)
      .prompt(questionsNewMember)
      .then((responses) => {
          
      });
}