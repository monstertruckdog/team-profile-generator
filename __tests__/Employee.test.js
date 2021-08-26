const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("name", () => {
    it("should return the name of the employee", () => {
      const personName = `Doug Doug`;

      const result = new Employee(personName);
      console.log(`employee name:  `, result.name)
      expect(result.name).toEqual(`Doug Doug`);
    });
  });
});