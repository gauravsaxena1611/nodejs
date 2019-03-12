var localTutor = require('./13.4-Child-ExtendingModules.js');

localTutor.NodeTutorial();
localTutor.NodeTutorial.pTutor();

// Or use this code
// var tut = new localTutor.NodeTutorial();  // Create and save object
// tut.pTutor();  // Call function on object


/** Our main application file now calls the "NodeTutorial" module.
 * 
 *  We are calling the "NodeTutorial" function. By calling this function, 
 *  the text "Extending Modules  Tutorial" will be displayed in the console log.
 * 
 *  Since we have extended our 13.3-ExtendingModules.js module and exposed a function called pTutor. 
 *  It also calls the tutorial module in the 13.3-ExtendingModules.js.js module, and the text 
 *  "Node.JS Tutorial" will be displayed to the console as well. 
 */