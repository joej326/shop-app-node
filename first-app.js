const http = require('http');
const express = require('express');

const app = express();


app.use('/', (req, res, next) => { // app.use() allows us to add a new middleware function. It runs for every request.
    console.log('this always runs');
    next(); // next() is what allows the request to contiune its journey to the next middleware (the one below for example)
}); 

app.use('/other', (req, res, next) => { // app.use() allows us to add a new middleware function. It runs for every request.
    console.log('in the middlware');
    res.send('<ol><li>hello</li><li>there!</li></ol>'); // sending a response is an ALTERNATIVE to using next()
}); 

// another middleware
app.use('/', (req, res, next) => { 
    console.log('in another middlware');
    res.send('<h1>main page</h1>');

}); 


// const server = http.createServer(app); 
                                                // LONG WAY
// server.listen(3003, () => console.log('running'));

// SHORT WAY:
// app.listen(3003, () => console.log('running')); // commented out to prevent conflicts