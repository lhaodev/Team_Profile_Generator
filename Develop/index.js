const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const teamMembers = [];
const teamId = [];


function buildTeam() {
    function addManagers() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: "What is the team manager's name?",
                    validate(value) {
                        if (value != "") {
                            return true;
                        } else {
                            return "Please enter a character. "
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'managerId',
                    message: "What is the manager's ID",
                    validate(value) {
                        var pass = value.match(
                            /^[1-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Please enter a number. "
                    }
                },

                {
                    type: 'input',
                    name: 'managerEmail',
                    message: "What is the email",
                    validate(value) {

                        var pass = value.match(
                            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Please enter a valid email. "


                    }
                },


                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "What is the office number",
                    validate(value) {
                        var pass = value.match(
                            /^[1-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Please enter a number. "
                    }
                },
            ])
            .then(response => {
                const manager = new Manager(
                    response.managerName,
                    response.managerId,
                    response.managerEmail,
                    response.officeNumber
                );
                teamMembers.push(manager);
                teamId.push(response.managerId)
                addTeamMembers();
            });
    }


    function addTeamMembers() {
        inquirer.prompt([

            {
                type: 'list',
                name: 'position',
                message: "What type of employees you want to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add more employees",
                ]
            }
        ]).then(userChoice => {
            if (userChoice.position === "Engineer") {
                addEngineer()

            } else if (userChoice.position === "Intern") {
                addIntern()
            } else {
                generateResult()
            }

        })

    }



    function addEngineer() {

        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: "What is the engineer's name?",
                    validate(value) {
                        if (value != "") {
                            return true;
                        } else {
                            return "Please enter a character. "
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'engineerId',
                    message: "What is the engineer's ID?",
                    validate(value) {
                        var pass = value.match(
                            /^[1-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Please enter a number. "
                    }
                },

                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is the email?",
                    validate(value) {

                        var pass = value.match(
                            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Please enter a valid email. "


                    }
                },

                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: "What is the github account?",
                    validate(value) {
                        if (value != "") {
                            return true;
                        } else {
                            return "Please enter a valid account. "
                        }
                    }
                },

            ])
            .then(response => {
                const engineer = new Engineer(
                    response.engineerName,
                    response.engineerId,
                    response.engineerEmail,
                    response.engineerGithub
                );
                teamMembers.push(engineer);
                teamId.push(response.engineerId)
                addTeamMembers();
            });
    }




    function addIntern() {


        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: "What is the intern's name?",
                    validate(value) {
                        if (value != "") {
                            return true;
                        } else {
                            return "Please enter a character. "
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'internId',
                    message: "What is the intern's ID?",
                    validate(value) {
                        var pass = value.match(
                            /^[1-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Please enter a number. "
                    }
                },

                {
                    type: 'input',
                    name: 'internEmail',
                    message: "What is the email?",
                    validate(value) {

                        var pass = value.match(
                            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Please enter a valid email. "


                    }
                },

                {
                    type: 'input',
                    name: 'internSchool',
                    message: "What is the intern's school?",
                    validate(value) {
                        if (value != "") {
                            return true;
                        } else {
                            return "Please enter a valid school. "
                        }
                    }
                },

            ])
            .then(response => {
                const intern = new Intern(
                    response.internName,
                    response.internId,
                    response.internEmail,
                    response.internSchool
                );
                teamMembers.push(intern);
                teamId.push(response.internId)
                addTeamMembers();
            });

    }







    function generateResult() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "UTF-8")
    }

    addManagers();

}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

buildTeam();