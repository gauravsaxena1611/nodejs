var person = require('./2.8-FunctionAsClassModule.js');

var person1 = new person('James', 'Bond');

console.log(person1.fullName());

/** As you can see, we have created a person object using new keyword. 
 * This means we have used function as a class in module
 */