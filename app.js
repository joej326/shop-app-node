const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// app.engine('hbs', expressHbs());
app.set('view engine', 'pug'); // app.set() allows us to set a global variable for express. We use it here to establish dynamic tamplates.
// app.set('views', 'views');  // the "views" property is used to point to the dir w/ the templates. It's already ~/views by default so this line is omitted.

app.use(bodyParser.urlencoded({extended: false})); // urlencoded has the next() functionality built in. Extended added b/c console complains
app.use(express.static(path.join(__dirname, 'public')));


// this will add "/admin" to the beginning of all adminRoutes routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render('404');
});




// const server = http.createServer(app); 
                                                // LONG WAY
// server.listen(3003, () => console.log('running'));

// SHORT WAY:
app.listen(3003, () => console.log('running'));