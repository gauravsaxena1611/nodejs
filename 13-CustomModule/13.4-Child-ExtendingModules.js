var Tutor = require('./13.3-ExtendingModules.js');

// exports.NodeTutorial = function () {
//     console.log("Extending Modules Tutorial");
//     function pTutor() {
//         Tutor.tutorial();
//     }
// }

// Or

var Tutor = require('./13.3-ExtendingModules.js');
exports.NodeTutorial = function () {
    console.log("Extending Modules Tutorial")
    this.pTutor = function () {
        var PTutor = Tutor
        PTutor.tutorial();
    }
}


/** We are using the "require" function in the new module file itself. 
 *  Since we are going to extend the existing module file "13.3-ExtendingModules.js", 
 *  we need to first include it before extending it.
 * 
 *  We then create a function called "Nodetutorial." This function will do 2 things, 
 *  1, It will send a string "Extending Modules Tutorial" to the console.
 *  2, It will send the string "Node.JS Tutorial" from the base module "13.3-ExtendingModules.js" 
 *     to our extended module "13.4-Child-ExtendingModules.js".
 * 
 *  Here we are carrying out the first step to send a string "Extending Modules Tutorial" to the console.
 *  
 *  The next step is to call the function from our Tutorial module, which will output the 
 *  string "Node.JS Tutorial" to the console.log. */