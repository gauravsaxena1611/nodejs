var fs = require("fs");

console.log("****************************");
// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error("Error Occured : " + err);
   }
   console.log("Asynchronous Read Completed: " + data.toString());
});

console.log("****************************");

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous Read Completed: " + data.toString());

console.log("Program Ended");

console.log("****************************");