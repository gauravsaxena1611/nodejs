// Pattern-2-Example: Extend EventEmitter Class

var emitter = require('events').EventEmitter;

var util = require('util');

function LoopProcessor(num) {
    var me = this;

    setTimeout(function () {
        
        for (var i = 1; i <= num; i++) {
            me.emit('BeforeProcess', i);
            console.log('Processing number:' + i);
            me.emit('AfterProcess', i);
        }
    } , 2000)
    return this; 
}

util.inherits(LoopProcessor, emitter)

var lp = new LoopProcessor(3);

lp.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});

lp.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});

/** In this pattern, we can extend the constructor function from EventEmitter 
 *  class to emit the events. 
 * 
 *  In the above example, we have extended LoopProcessor constructor function with EventEmitter 
 *  class using util.inherits() method of utility module. So, you can use EventEmitter's methods 
 *  with LoopProcessor object to handle its own events.
 * 
 * In this way, you can use EventEmitter class to raise and handle custom events in Node.js.
 * 
 * */