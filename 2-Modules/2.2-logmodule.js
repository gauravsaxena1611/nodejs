var log = {
    info: function (info) { 
        console.log('Info: ' + info);
    },
    warning:function (warning) { 
        console.log('Warning: ' + warning);
    },
    error:function (error) { 
        console.log('Error: ' + error);
    }
};

module.exports = log


// this module will log the information, warning or error to the console

/** In the above example of logging module, we have created an object with three functions - 
1, info(), 
2, warning() and 
3, error(). 

At the end, we have assigned this object to module.exports. 
The module.exports in the above example exposes a log object as a module.

The module.exports is a special object which is included in every JS file in the Node.js application 
by default. Use module.exports or exports to expose a function, object or variable as a module 
in Node.js. 

Here info:, warning: and error: are the object we exported
*/ 
