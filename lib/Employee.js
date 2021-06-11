class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    get name() {
        return this.name
    }

    get id() {
        return this.id
    }
    get role() {
        return 'Employee'
    }
}

module.exports = Employee;