"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.greet = function () {
        console.log("Welcome, " + this.name);
    };
    return Employee;
}());
exports.default = Employee;
/*Properties are public that's why we can use outside of the class, if they were protected and private
  then you can't access outside the class.

  protected only accessible within a class and derived class
  private only accessible within a class
  public can be accessible everywhere
*/
var emp1 = new Employee('Aakash');
console.log("Employee name is " + emp1.name);
emp1.greet();
