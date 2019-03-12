// Pattern-1-Example: Return EventEmitter from a function

var emitter = require('events').EventEmitter;

function LoopProcessor(num) {
    var e = new emitter();
    
    setTimeout(function () {
        
        for (var i = 1; i <= num; i++) {
            e.emit('BeforeProcess', i);
            console.log('Processing number:' + i);
            e.emit('AfterProcess', i);
        }
    }, 2000)
    return e;
}
var lp = LoopProcessor(3);

lp.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});

lp.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});



/** There are two common patterns that can be used to raise and bind an event 
 *  using EventEmitter class in Node.js.
 *  1.	Return EventEmitter from a function
 *  
 *  In this pattern, a constructor function returns an EventEmitter object, which was used to 
 *  emit events inside a function. This EventEmitter object can be used to subscribe for the events. 
 *  Consider above example.
 * 
 *  In the above LoopProcessor() function, first we create an object of EventEmitter class 
 *  and then use it to emit 'BeforeProcess' and 'AfterProcess' events. Finally, we return an object 
 *  of EventEmitter from the function. So now, we can use the return value of LoopProcessor function 
 *  to bind these events using on() or addListener() function.
 * 
 * */