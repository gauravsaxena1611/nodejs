var express = require('express');
var app = express();
 
//assigning EJS as view engine
app.set('view engine', 'ejs');
 
app.get('/', function(req, rep) {
    rep.sendFile(__dirname + '/index.html');
})
 
app.get('/about', function(req, rep) {
    rep.sendFile(__dirname + '/about.html');
})
 
var students = {
    1 : 'Mark',
    2 : 'Tom',
    3 : 'john'
}
 
//Render method is used to render students.ejs file (first parameter)
app.get('/students/:id', function(req, rep) {
    rep.render('students', { name : students[req.params.id] , id : req.params.id});
})
 
app.listen(3000, function() {
    console.log('our server is live on posrt 3000');
})

// https://www.udemy.com/learn-node-js-complete-from-very-basics-to-advance/learn/v4/t/lecture/10331820?start=87