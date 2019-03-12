var fs = require('fs');

fs.appendFile('test.txt', 'Hello World!', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Append operation complete.');
});

// https://www.tutorialsteacher.com/nodejs/nodejs-file-system