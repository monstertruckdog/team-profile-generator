const Employee = require("../lib/Employee");

describe("Employee", () => {

  const person = [`Doug Doug`, 500033, `doug@dougdoug.com`];

  describe("name", () => {
    it("should return the name of the employee", () => {
      const result = new Employee(person[0], person[1], person[2]);
      expect(result.name).toEqual(`Doug Doug`);
    });
  });

  describe("id", () => {
    it("should return the ID value of the employee", () => {
      const result = new Employee(person[0], person[1], person[2]);
      expect(result.id).toEqual(500033);
    });
  });

  describe("email", () => {
    it("should return the email address of the employee", () => {
      const result = new Employee(person[0], person[1], person[2]);
      expect(result.email).toEqual(`doug@dougdoug.com`);
    });
  });

  describe("role", () => {
    it("should return the correct role of the Employee, \"Employee\"", () => {
      const result = new Employee(person[0], person[1], person[2]);
      expect(result.getRole()).toEqual(`Employee`);
    });
  });

  describe("role", () => {
    it("should not return an employee role value that has not been overwritten`", () => {
      const result = new Employee(person[0], person[1], person[2]);
      expect(result.getRole()).not.toEqual(`Manager`);
    });
  });

  describe("employee office number", () => {
    it("should not return an office number since no office number value should be assigned to an employee`", () => {
      const result = new Employee(person[0], person[1], person[2]);
      expect(result.officeNum).not.toBeDefined();
    });
  });

  describe("employee git hub", () => {
    it("should not return an GitHub value since no GitHub value should be assigned to an employee`", () => {
      const result = new Employee(person[0], person[1], person[2]);
      expect(result.gitHubUser).not.toBeDefined();
    });
  });

  describe("employee school name", () => {
    it("should not return a school or university name since no school or university name should be assigned to an employee`", () => {
      const result = new Employee(person[0], person[1], person[2]);
      expect(result.schoolName).not.toBeDefined();
    });
  });
});

