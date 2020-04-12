console.log('This works!')

function add (n1: number, n2: number): string {
  return (n1 + n2).toString()
}

const number1 = 4;
const number2 = 2;

add(number1, number2)

const person: {
  name : string,
  number : number,
  hobbies : string[], //String Array
  roles : [number, string] //Tuple with fix length
} = {
  name : 'Aakash',
  number : 123456789,
  hobbies : ['cricket', 'music'],
  roles : [23, 'Sub-admin']
}

console.log('Person first name', person.name)

//Use of Interface

interface Address {
  city : String,   
  state : String,
  country?: String //Optional Argument
}


function getAddress(address : Address) {
  console.log(`City is ${address.city} and State is ${address.state}`)
}