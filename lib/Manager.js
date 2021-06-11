const Employee = require('./Employee')

class Manager extends Employee {
    //role = 'Manager'
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    name() {
        return this.name
    }

    id() {
        return this.id
    }

    email() {
        return this.email
    }

    role() {
        const role = 'Manager'
        return this.role;
    }
}

module.exports = Manager;