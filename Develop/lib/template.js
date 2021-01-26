function main(data) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Team</title>
          <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css" rel="stylesheet" integrity="sha384-yrfSO0DBjS56u5M+SjWTyAHujrkiYVtRYh2dtB3yLQtUz3bodOeialO59u5lUCFF" crossorigin="anonymous">
          <link rel="stylesheet" href="style.css">
          <script src="https://kit.fontawesome.com/c502137733.js"></script>
          <style>
              .jumbotron {
                  background-color: #443850;
              }
              body {
                  background-color: white;
              }
              h1 {
                  color: white;
              }
              .card-header, .card-body {
                  background-color: white;
              }
          </style>
      </head>
      
      <body>
          <div class="container-fluid">
              <div class="row">
                  <div class="col-12 jumbotron mb-3 team-heading">
                      <h1 class="text-center">My Team</h1>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row">
                  <div class="team-area col-12 d-flex justify-content-center">
                      ${data}
                  </div>
              </div>
          </div>
      </body>
      
      </html>
  `;
}
// export mainRender
module.exports = main;




function engineerCard(data) {
    return `
      <script src="https://kit.fontawesome.com/7b4d2fea99.js" crossorigin="anonymous"></script>
          <div class="card employee-card m-2 col-3">
          <div class="card-header">
              <h2 class="card-title">${data.name}</h2>
              <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${data.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}" target="_blank" rel="noopener noreferrer">${data.github}</a></li>
              </ul>
          </div>
      </div>
      `;
}
module.exports = engineerCard;


function internCard(data) {
    return `
      <script src="https://kit.fontawesome.com/7b4d2fea99.js" crossorigin="anonymous"></script>
      <div class="card employee-card m-2 col-3">
      <div class="card-header">
          <h2 class="card-title">${data.name}</h2>
          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${data.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
              <li class="list-group-item">School: ${data.school}</li>
          </ul>
      </div>
  </div>
  `;
}
module.exports = internCard;

function managerCard(data) {
    return `
      <div class="card employee-card m-2 col-3">
      <script src="https://kit.fontawesome.com/7b4d2fea99.js" crossorigin="anonymous"></script>
      <div class="card-header">
          <h2 class="card-title">${data.name}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${data.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
              <li class="list-group-item">Office number: ${data.officeNumber}</li>
          </ul>
      </div>
  </div>
      `;
}

module.exports = managerCard;


