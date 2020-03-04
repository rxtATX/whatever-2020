const Employee = require("./Employee");

// function Manager(name, id, email, office) {
//     Employee.call(this, name, id, email);

//     this.role = "Manager";
//     this.officeNumber = office;
// }

// Manager.prototype = Object.create(Employee.prototype);

// Manager.prototype.getOfficeNumber = function () {
//     return this.officeNumber;
// }

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);

        this.role = "Manager";
        this.officeNumber = office;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;