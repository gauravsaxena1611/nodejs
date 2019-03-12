var events = require('events');
var util = require('util');


var Student = function (name){
    this.name = name;
}

util.inherits(Student, events.EventEmitter);

var max = new Student('max');

max.on('scored', function(marks){
  console.log(max.name + ' scores ' + marks + ' marks')
});

max.emit('scored',95);



var tom = new Student('tom');

tom.on('scored', function(marks){
  console.log(tom.name + ' scores ' + marks + ' marks')
});

tom.emit('scored',85);