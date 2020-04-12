"use strict";
console.log('This works!');
function add(n1, n2) {
    return (n1 + n2).toString();
}
var number1 = 4;
var number2 = 2;
add(number1, number2);
var person = {
    name: 'Aakash',
    number: 123456789,
    hobbies: ['cricket', 'music'],
    roles: [23, 'Sub-admin']
};
console.log('Person first name', person.name);
function getAddress(address) {
    console.log("City is " + address.city + " and State is " + address.state);
}
