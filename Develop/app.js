// ------------------------Classes------------------------------------//
const Employee = require("./lib/Employee");
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


// (+)Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


var managerCounter = 0;


const teamMembers = {
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
            name: "internName"
        },
        {
            type: "input",
            message: "What is the intern's id? ",
            name: "internId"
        },

        {
            type: "input",
            message: "What is the intern's email? ",
            name: "internEmail"
        }, {
            type: "input",
            message: "What is the intern's school? ",
            name: "school"
        }

    ]
}



function start() {


    inquirer.prompt(addNew).then((answer) => {

        if (answer.addMember == "Yes") {
            addRole();
        } else {



            fs.writeFileSync(outputPath, render(Team), "utf-8");
            process.exit(0);
        }


    })

}
const addNew = {
    type: "List",
    message: "Do you want to add another employee? ",
    name: "addMember",
    choices: ["Yes", "No"],
}



//--------------Run the APP -------------------------------//
function addRole() {
    inquirer.prompt([{
        type: "list",
        message: "Choose the employee's role:",
        name: "employeeChoice",
        choices: ["Manager", "Engineer", "Intern", ]
    }]).then((answer) => {
        if (answer.employeeChoice === "Manager" && managerCounter < 1) {
            managerCounter++
            // console.log("hey boss")
            inquirer.prompt(teamMembers.Manager).then((results) => {


                const manager = new Manager(results.managerName, results.managerId, results.managerEmail, results.managerOfficeNumber);
                Team.push(manager);
                start();

            })
        } else if (answer.employeeChoice === "Engineer") {


            inquirer.prompt(teamMembers.Engineer).then((results) => {

                const engineer = new Manager(results.engineerName, results.engineerId, results.engineerEmail, results.Github);
                Team.push(engineer);

                start();

            })
        } else if (answer.employeeChoice === "Intern") {

            inquirer.prompt(teamMembers.Intern).then((results) => {

                const intern = new Manager(results.internName, results.internId, results.internEmail, results.school);
                Team.push(intern);
                start();

            })
        } else {
            start();
        }


    })
}


start();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// (+)HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type. 

//(+)  HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```