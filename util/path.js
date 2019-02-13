const path = require('path');

module.exports = path.dirname(process.mainModule.filename); // path.dirname returns the directory name of a path. "process" is a global variable.
                                                    // mainModule refers to the module that started the app. In this case, app.js

// in the end, all this does is export the directory name of the main file of the app.
// we are using this as a cleaner way of doing __dirname in the app.js file.