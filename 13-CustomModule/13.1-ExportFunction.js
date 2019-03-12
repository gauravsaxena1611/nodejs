var exports = module.exports = {};

exports.AddNumber = function (a, b) {
    return a + b;
};

/** The "exports" keyword is used to ensure that the functionality defined in this file can 
 *  actually be accessed by other files.
 * 
 *  We are then defining a function called 'AddNumber'. This function is defined to 
 *  take 2 parameters, a and b. The function is added to the module "exports" to make the function 
 *  as a public function that can be accessed by other application modules.
 * 
 *  We are finally making our function return the added value of the parameters. 
 */