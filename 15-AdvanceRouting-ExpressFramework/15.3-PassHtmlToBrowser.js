var express = require('express');
var app = express();
 
app.get('/', function(req, rep) {
    rep.sendFile(__dirname + '/index.html');
})
 
app.get('/about', function(req, rep) {
    rep.sendFile(__dirname + '/about.html');
})
 
app.listen(3000, function() {
    console.log('our server is live on posrt 3000');
})