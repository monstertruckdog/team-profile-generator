const Manager = require("../lib/Manager");

describe("Manager", () => {

  const person = [`Francis Soyer`, 500034, `psycho@yahoo.com`, `340G`];

  describe("name", () => {
    it("should return the name of the Manager", () => {
      const result = new Manager(person[0], person[1], person[2], person[3]);
      expect(result.name).toEqual(`Francis Soyer`);
    });
  });

  describe("id", () => {
    it("should return the ID value of the Manager", () => {
      const result = new Manager(person[0], person[1], person[2], person[3]);
      expect(result.id).toEqual(500034);
    });
  });

  describe("email", () => {
    it("should return the email address of the Manager", () => {
      const result = new Manager(person[0], person[1], person[2], person[3]);
      expect(result.email).toEqual(`psycho@yahoo.com`);
    });
  });

  describe("role", () => {
    it("should return the correct role of the Employee, \"Manager\"", () => {
      const result = new Manager(person[0], person[1], person[2], person[3]);
      expect(result.getRole()).toEqual(`Manager`);
    });
  });

  describe("role", () => {
    it("should overwrite the Employer role assigned so the role should not be \"Employee\"", () => {
      const result = new Manager(person[0], person[1], person[2], person[3]);
      expect(result.getRole()).not.toEqual(`Employee`);
    });
  });

  describe("Manager's office number", () => {
    it("should not return an office number since no office number value should be assigned to an employee`", () => {
      const result = new Manager(person[0], person[1], person[2], person[3]);
      expect(result.officeNum).toEqual('340G');
    });
  });

  describe("Manager's git hub", () => {
    it("should not return an GitHub value since no GitHub value should be assigned to an employee`", () => {
      const result = new Manager(person[0], person[1], person[2], person[3]);
      expect(result.gitHubUser).not.toBeDefined();
    });
  });

  describe("Manager's school name", () => {
    it("should not return a school or university name since no school or university name should be assigned to an employee`", () => {
      const result = new Manager(person[0], person[1], person[2], person[3]);
      expect(result.schoolName).not.toBeDefined();
    });
  });
});

