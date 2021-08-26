const Intern =  require("../lib/Intern");

describe("Intern", () => {

  const person = [`Paul Westerberg`, 500036, `admin@drywoodgarage.com`, `NA; dropped out of high school`];

  describe("name", () => {
    it("should return the name of the Intern", () => {
      const result = new Intern(person[0], person[1], person[2], person[3]);
      expect(result.name).toEqual(`Paul Westerberg`);
    });
  });

  describe("id", () => {
    it("should return the ID value of the Intern", () => {
      const result = new Intern(person[0], person[1], person[2], person[3]);
      expect(result.id).toEqual(500036);
    });
  });

  describe("email", () => {
    it("should return the email address of the Intern", () => {
      const result = new Intern(person[0], person[1], person[2], person[3]);
      expect(result.email).toEqual(`admin@drywoodgarage.com`);
    });
  });

  describe("role", () => {
    it("should return the correct role of the Employee, \"Intern\"", () => {
      const result = new Intern(person[0], person[1], person[2], person[3]);
      expect(result.getRole()).toEqual(`Intern`);
    });
  });

  describe("role", () => {
    it("should overwrite the Employer role assigned so the role should not be \"Employee\"", () => {
      const result = new Intern(person[0], person[1], person[2], person[3]);
      expect(result.getRole()).not.toEqual(`Employee`);
    });
  });

  describe("Intern's office number", () => {
    it("should not return an office number since no office number value should be assigned to an employee`", () => {
      const result = new Intern(person[0], person[1], person[2], person[3]);
      expect(result.officeNum).not.toBeDefined();
    });
  });

  describe("Intern's git hub name", () => {
    it("should not return an GitHub value since no GitHub value should be assigned to an employee`", () => {
      const result = new Intern(person[0], person[1], person[2], person[3]);
      expect(result.gitHubName).not.toBeDefined();
    });
  });

  describe("Intern's school name", () => {
    it("should not return a school or university name since no school or university name should be assigned to an employee`", () => {
      const result = new Intern(person[0], person[1], person[2], person[3]);
      expect(result.schoolName).toEqual(`NA; dropped out of high school`);
    });
  });
});

