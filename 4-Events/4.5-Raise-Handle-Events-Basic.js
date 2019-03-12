// get the reference of EventEmitter class of events module
var events = require('events');

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();

//Subscribe for FirstEvent
em.on('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

// Raising FirstEvent
em.emit('FirstEvent', 'This is my first Node.js event emitter example.');


/** The above example demonstrates EventEmitter class for raising and handling a custom event. 
 * 
 * In the above example, we first import the 'events' module and then create an object of 
 * EventEmitter class. We then specify event handler function using on() function. 
 * The on() method requires name of the event to handle and callback function which is called 
 * when an event is raised. 
 * 
 * The emit() function raises the specified event. First parameter is 
 * name of the event as a string and then arguments. An event can be emitted with zero or more 
 * arguments. You can specify any name for a custom event in the emit() function.
 * 
*/
