// function Employee(name, id, email) {
//     this.role = "Employee";
//     this.name = name;
//     this.id = id;
//     this.email = email;
// }

// Employee.prototype.getEmail = function () {
//     return this.email;
// }

// Employee.prototype.getName = function () {
//     return this.name;
// }

// Employee.prototype.getId = function () {
//     return this.id;
// }

// Employee.prototype.getRole = function () {
//     return this.role;
// }

class Employee {
    constructor(name, id, email) {
        this.role = "Employee";
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;