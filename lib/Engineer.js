const Employee = require("./Employee");

// function Engineer(name, id, email, github) {
//     Employee.call(this, name, id, email);

//     this.role = "Engineer";
//     this.github = github;
// }

// Engineer.prototype = Object.create(Employee.prototype);

// Engineer.prototype.getGithub = function () {
//     return this.github;
// }

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.role = "Engineer";
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;