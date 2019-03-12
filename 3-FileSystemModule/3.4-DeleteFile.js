var fs = require('fs'); 

//Synchronous Deletion
try { 
    fs.unlinkSync('./test.txt'); 
    console.log('test.txt successfully deleted'); 
} catch (err) { 
    console.log('Error:', err); 
} 

//Asynchronous Deletion
fs.unlink('./test1.txt', function (err) { 
    if (err) {
       console.log('Error:', err); 
    } else {
       console.log('test.txt successfully deleted'); 
    } 
}); 

//http://www.java2s.com/Tutorials/Javascript/Node.js_Tutorial/1060__Node.js_fs_Module.htm