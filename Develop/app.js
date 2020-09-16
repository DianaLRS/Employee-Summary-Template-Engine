// ------------------------Classes------------------------------------//
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// ------------------ Dependencies-------------------------------------//
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require("jest")

//------------- Our Variables -----------------------------------------//
let Team = [];
//-----------------PATH------------------------------------------------//
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//----------------Render----------------------------------------------//
const render = require("./lib/htmlRenderer");

//-------------------Our Code ---------------------------------------//


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const employeeType = {
    type: "list",
    message: "Choose the employee's role:",
    name: ["Manager", "Engineer", "Intern", ]
}

console.log(employeeType)

const buildTeam = {
    Manager: [{
            type: "input",
            message: "What is the manager's name? ",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is the manager's id? ",
            name: "managerId"
        },

        {
            type: "input",
            message: "What is the manager's email? ",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is the manager's office number? ",
            name: "officeNumber"

        }
    ],


    Engineer: [{
            type: "input",
            message: "What is the engineer's name? ",
            name: "engineerName"
        },
        {
            type: "input",
            message: "What is the engineer's id? ",
            name: "engineerId"
        },

        {
            type: "input",
            message: "What is the engineer's email? ",
            name: "engineerEmail"
        }, {

            type: "input",
            message: "What is the engineer's Github username? ",
            name: "Github"
        }
    ],

    Intern: [{
            type: "input",
            message: "What is the intern's name? ",
            name: "employeeName"
        },
        {
            type: "input",
            message: "What is the intern's id? ",
            name: "employeeId"
        },

        {
            type: "input",
            message: "What is the intern's email? ",
            name: "employeeEmail"
        }, {
            type: "input",
            message: "What is the intern's school? ",
            name: "school"
        }

    ]
}

console.log(buildTeam)



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

//(+)  HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```