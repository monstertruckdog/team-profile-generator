// onst headAndHeader = document.getElementsByClassName("header");
// const mainSection = document.getElementById("main-section")
//const mainBody = document.getElementById("main-body");
// const mainBody = document.body;

const generateHtmlHead = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"/>
        <link rel="stylesheet" type="text/css" href='https://fonts.googleapis.com/css?family=Libre+Baskerville' />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <link rel="stylesheet" href="./css/style.css" />
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="header">
            <nav class="navbar level is-info">
                <h3 class="level-item has-text-centered is-size-3 has-text-white has-background-info">My Team</h3>
            </nav>
        </header>
        <section id="main-section"></section>`
}

const generateHtmlManager = (createdManager) => {
    console.log(`createdManager:  `, createdManager);
    console.log(`mgmtResponses (MODIFIED):  `, createdManager.name)
    //body.append(`<section id="main-section"></section>`);
    // const mainSection = document.getElementById("main-section")
    // return mainSection.append(`
    return (`
    <div class="container card-storage">
        <div class="card" id="employee-card">
            <div class="card-content has-background-info">
                <p class="title has-text-white">
                    <!--Member Name Here-->
                    ${createdManager.name}
                </p>
                <p class="subtitle has-text-white">
                    <!--Member Job Here-->
                    Manager
                </p>
            </div>
            <div>
                <table class="table is-bordered table-style-oth">
                    <tbody>
                        <tr>
                            <td><strong>EMPLOYEE ID</strong></td>
                            <td>${createdManager.id}</td>
                        </tr>
                        <tr>
                            <td><strong>EMPLOYEE EMAIL</strong></td>
                            <td>${createdManager.email}</td>
                        </tr>
                        <tr>
                            <td><strong>OFFICE NUMBER / GITHUB / SCHOOL</strong></td>
                            <td>${createdManager.officeNum}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>`)
}

module.exports = {
    generateHtmlHead,
    generateHtmlManager
}