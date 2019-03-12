var fs = require('fs');
var http = require('http');
 
 
http.createServer(function (req, res) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
 
   res.writeHead(200, {'Content-Type': 'text/plain'});   
   var readStream = fs.createReadStream('input.txt', 'utf8');
   readStream.pipe(res);
}).listen(3000);
 
// Console will print the message
console.log("server is running on http://127.0.0.1:3000/")