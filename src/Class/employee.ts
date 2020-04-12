export default class Employee {
  name : string //By default public

  constructor(name: string) {
    this.name = name
  }

  greet() {
    console.log(`Welcome, ${this.name}`)
  }

}

/*Properties are public that's why we can use outside of the class, if they were protected and private
  then you can't access outside the class.

  protected only accessible within a class and derived class
  private only accessible within a class
  public can be accessible everywhere
*/

let emp1 = new Employee('Aakash')
console.log(`Employee name is ${emp1.name}`)
emp1.greet()