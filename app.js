var person = require('../Node_exercise2/person');

var person1 = new person('James', 'Bond', 'james007@bond.com');
var person2 = new person('Grant', 'Gun', 'gg@Gung.com');
var person3 = new person('Tony', 'Montana', 'tony@theworldisyours.com');

console.log(person1.personDetails());
console.log(person2.personDetails());
console.log(person3.personDetails());
