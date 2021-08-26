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
    return (`
    <div class="container card-storage" id="mgr-card">
        <div class="card" id="employee-card">
            <div class="card-content has-background-info">
                <p class="title has-text-white">
                    <!--Member Name Here-->
                    ${createdManager.name}
                </p>
                <p class="subtitle has-text-white">
                    <!--Member Job Here-->
                    ${createdManager.getRole()}
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
                            <td><strong>OFFICE NUMBER</strong></td>
                            <td>${createdManager.officeNum}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="container card-storage">`)
}

const generateHtmlEngineer = (createdEngineer) => {
    return (`
        <div class="card" id="employee-card">
            <div class="card-content has-background-info">
                <p class="title has-text-white">
                    <!--Member Name Here-->
                    ${createdEngineer.name}
                </p>
                <p class="subtitle has-text-white">
                    <!--Member Job Here-->
                    ${createdEngineer.getRole()}
                </p>
            </div>
            <div>
                <table class="table is-bordered table-style-oth">
                    <tbody>
                        <tr>
                            <td><strong>EMPLOYEE ID</strong></td>
                            <td>${createdEngineer.id}</td>
                        </tr>
                        <tr>
                            <td><strong>EMPLOYEE EMAIL</strong></td>
                            <td>${createdEngineer.email}</td>
                        </tr>
                        <tr>
                            <td><strong>GITHUB / SCHOOL</strong></td>
                            <td><a href="https://github.com/${createdEngineer.gitHubName}" target="_blank" rel="nofollow external noreferrer noopener">${createdEngineer.gitHubName}</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>`)
}

const generateHtmlIntern = (createdIntern) => {
    return (`
        <div class="card" id="employee-card">
            <div class="card-content has-background-info">
                <p class="title has-text-white">
                    <!--Member Name Here-->
                    ${createdIntern.name}
                </p>
                <p class="subtitle has-text-white">
                    <!--Member Job Here-->
                    ${createdIntern.getRole()}
                </p>
            </div>
            <div>
                <table class="table is-bordered table-style-oth">
                    <tbody>
                        <tr>
                            <td><strong>EMPLOYEE ID</strong></td>
                            <td>${createdIntern.id}</td>
                        </tr>
                        <tr>
                            <td><strong>EMPLOYEE EMAIL</strong></td>
                            <td>${createdIntern.email}</td>
                        </tr>
                        <tr>
                            <td><strong>SCHOOL</strong></td>
                            <td>${createdIntern.schoolName}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>`)
}

module.exports = {
    generateHtmlHead,
    generateHtmlManager,
    generateHtmlEngineer,
    generateHtmlIntern
}