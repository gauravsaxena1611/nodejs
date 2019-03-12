var express = require('express');
var app = express();
 
app.set('view engine', 'ejs');
 
var students = {
    1 : {
        name : 'Mark',
        subjects : ['c++', 'Java', 'c']
    },
    2 : {
        name : 'Tom',
        subjects : ['C#', 'Pthon', 'Mysql']
    },
    3 : {
        name : 'John',
        subjects : ['Javascript', 'Sqlite', 'c']
    },
}
 
app.get('/students/:id', function(req, rep) {
    rep.render('students-updated', { name : students[req.params.id].name , id : req.params.id
        , subjects : students[req.params.id].subjects});
})
 
app.listen(3000, function() {
    console.log('our server is live on posrt 3000');
})


// https://www.udemy.com/learn-node-js-complete-from-very-basics-to-advance/learn/v4/t/lecture/10331830?start=0