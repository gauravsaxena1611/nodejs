var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler1 = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler1);

//Fire the 'scream' event:
eventEmitter.emit('scream');



//Create an event handler with parameters
var myEventHandler2 = function (name) {
    console.log('I hear a laughter of ' + name + ' !');
  }

  //Assign the event handler to an event:
  eventEmitter.on('laughter', myEventHandler2);

//Fire the 'scream' event:
eventEmitter.emit('laughter', 'Gaurav');