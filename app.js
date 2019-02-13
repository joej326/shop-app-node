const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false})); // urlencoded has the next() functionality built in. Extended added b/c console complains
app.use(express.static(path.join(__dirname, 'public')));


// this will add "/admin" to the beginning of all adminRoutes routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});




// const server = http.createServer(app); 
                                                // LONG WAY
// server.listen(3003, () => console.log('running'));

// SHORT WAY:
app.listen(3003, () => console.log('running'));