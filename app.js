const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team");

const render = require("./lib/htmlRenderer");
const employees = [];

const checkNum = (num) => {
    return Number.isInteger(parseInt(num));
}

const checkNumberOfIndicatedProperty = (prop) => {
    return employees.filter(emp => emp[prop] === input).length;
}

const confirmLength = (input) => {
    if (input !== "") {
        return true;
    }
    return "Please enter at least one character.";
}

const moreQuestions = { name: "more", message: "Do you want to add an Engineer or an Intern?", type: "list", choices: ["Engineer", "Intern", "I'm done adding employees"] };

const genericQuestions = [{
    name: "name", message: "Enter your name.", validate: confirmLength
},
{
    name: "id", message: "Enter your id number.", validate: (input) => {
        if (checkNum(input) && checkNumberOfIndicatedProperty("id") === 0) return true;
        else return "Enter a valid ID number which has not been used before.";
    }
},
{
    name: "email", message: "Enter your email.", validate: (input) => {
        if (input.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/gmi))
            return true

        else return "Enter a valid email address."
    }
},
]

const managerQuestions = [
    ...genericQuestions,
    {
        name: "office", message: "Enter your office number.", validate: (input) => {
            if (checkNum(input) && checkNumberOfIndicatedProperty("officeNumber") === 0) return true;
            else return "Enter a valid office number."
        },
    },
    moreQuestions,
];

const internQuestions = [
    ...genericQuestions,
    {
        name: "school", message: "Enter the name of your school.", validate: confirmLength
    },
    moreQuestions,
];

const engineerQuestions = [
    ...genericQuestions,
    {
        name: "github", message: "Enter your GitHub username.", confirmLength
    },
    moreQuestions,
];

async function promptQuestions(questions, key) {
    try {
        const { more, ...rest } = await inquirer.prompt(questions);
        const employee = constructEmp(key, rest)

        employees.push(employee);

        continuePrompt(more);
    } catch (err) {
        continuePrompt();
    }
}

const constructEmp = (empType, obj) => {
    let { name, id, email } = obj;
    switch (empType) {
        case "Manager":
            return new Manager(name, id, email, obj.office);
        case "Intern":
            return new Intern(name, id, email, obj.school);
        case "Engineer":
            return new Engineer(name, id, email, obj.github);
        default:
            return writeToFile()
    }
}

const continuePrompt = (more) => {
    switch (more) {
        case "Engineer":
            return promptQuestions(engineerQuestions, more);
        case "Intern":
            return promptQuestions(internQuestions, more);
        default:
            return writeToFile();
    }
}

const writeToFile = () => {
    const { id } = employees[0];
    return fs.writeFile(`${outputPath}${id}${Date.now()}.html`, render(employees), function (err) {
        if (err) console.log(err);

        else console.log("Written to new html file:" + `${outputPath}${id}${Date.now()}.html`);
    });
}

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
promptQuestions(managerQuestions, "Manager");