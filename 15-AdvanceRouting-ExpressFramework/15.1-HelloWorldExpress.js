var express = require('express');
 
var app = express();

// GET
// POST
// PUT
// DELETE
app.get('/', function(req, rep) {
    rep.send('Hello World- This is Home Page');
})
 
app.get('/about', function(req, rep) {
    rep.send('This is About Page');
})
 
app.get('/contact', function(req, rep) {
    rep.send('This is Contact Page');
})
 
app.listen(3000, function() {
    console.log('our server is live on posrt 3000');
})