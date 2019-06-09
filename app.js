const express = require('express');
const { projects } = require('./data.json');
const bodyParser = require('body-parser');

const projectsRoutes = require('./routes/projects');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//This sets up the public folder to set up static files
app.use('/static', express.static('public'));

//Makes the language veiwed as PUG
app.set('view engine', 'pug');

//sets the projects route
app.use('/projects', projectsRoutes);


//Created routes start
app.get('/', (req, res, next) => {
    res.render('index', { projects });
  
});

app.get('/about', (req, res, next) => {
    res.render('about');
});


// Routes End

//Error Starts
app.use((req, res, next) => {
    console.log("A Error has happened!");
    const err = new Error('Error!!!');
    err.status = 404; 
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

//Error End


//Server start
// app.listen(3000, () => {
//     console.log('The application is running on localhost:3000!')
//   });
//   module.exports = app;

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);