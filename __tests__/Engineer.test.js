const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

  const person = [`William Emanuel Cobham Jr.`, 500035, `bcobham@gmail.com`, `billycobhamdrum`];

  describe("name", () => {
    it("should return the name of the Engineer", () => {
      const result = new Engineer(person[0], person[1], person[2], person[3]);
      expect(result.name).toEqual(`William Emanuel Cobham Jr.`);
    });
  });

  describe("id", () => {
    it("should return the ID value of the Engineer", () => {
      const result = new Engineer(person[0], person[1], person[2], person[3]);
      expect(result.id).toEqual(500035);
    });
  });

  describe("email", () => {
    it("should return the email address of the Engineer", () => {
      const result = new Engineer(person[0], person[1], person[2], person[3]);
      expect(result.email).toEqual(`bcobham@gmail.com`);
    });
  });

  describe("role", () => {
    it("should return the correct role of the Employee, \"Manager\"", () => {
      const result = new Engineer(person[0], person[1], person[2], person[3]);
      expect(result.getRole()).toEqual(`Engineer`);
    });
  });

  describe("role", () => {
    it("should overwrite the Employer role assigned so the role should not be \"Employee\"", () => {
      const result = new Engineer(person[0], person[1], person[2], person[3]);
      expect(result.getRole()).not.toEqual(`Employee`);
    });
  });

  describe("Engineer's office number", () => {
    it("should not return an office number since no office number value should be assigned to an employee`", () => {
      const result = new Engineer(person[0], person[1], person[2], person[3]);
      expect(result.officeNum).not.toBeDefined();
    });
  });

  describe("Engineer's git hub", () => {
    it("should not return an GitHub value since no GitHub value should be assigned to an employee`", () => {
      const result = new Engineer(person[0], person[1], person[2], person[3]);
      expect(result.gitHubName).toEqual(`billycobhamdrum`)
    });
  });

  describe("Engineer's school name", () => {
    it("should not return a school or university name since no school or university name should be assigned to an employee`", () => {
      const result = new Engineer(person[0], person[1], person[2], person[3]);
      expect(result.schoolName).not.toBeDefined();
    });
  });
});

