const Employee = require("./Employee");

// function Intern(name, id, email, school) {
//     Employee.call(this, name, id, email);

//     this.role = "Intern";
//     this.school = school;
// }

// Intern.prototype = Object.create(Employee.prototype)

// Intern.prototype.getSchool = function () {
//     return this.school;
// }

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.role = "Intern";
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;