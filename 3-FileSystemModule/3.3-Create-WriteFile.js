var fs = require('fs');

fs.writeFile('test.txt', 'Hello World!', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Write operation complete.');
});

// https://www.tutorialsteacher.com/nodejs/nodejs-file-system