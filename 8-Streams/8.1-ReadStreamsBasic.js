var fs = require('fs');
var readStream = fs.createReadStream('input.txt','utf8');
var data = '';

readStream.on('data', function(chunk) {
    console.log('------------------------------------------------------------');
    data += chunk;
    //console.log(chunk);
})
 
readStream.on('end', function(chunk) {
    console.log(data);
    console.log('--------------------End----------------------------------------');
})

// https://www.udemy.com/learn-node-js-complete-from-very-basics-to-advance/learn/v4/t/lecture/10673128?start=0