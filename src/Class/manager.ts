import Employee from './employee'

class Manager extends Employee {
  constructor(name: string) {
    super(name) //Using Parent class properties
  }

  delegateWork() {
    console.log(`Manager delegating tasks to ${this.name}`)
  }
}

let m1 = new Manager('Jp')
console.log(`manager is ${m1.name}`)
m1.greet()