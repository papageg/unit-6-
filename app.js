const express = require('express');
const { projects } = require('./data.json');
const bodyParser = require('body-parser');

const projectsRoutes = require('./routes/projects');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.use('/projects', projectsRoutes);



app.get('/', (req, res, next) => {
    res.render('index', { projects });
  
});

app.get('/about', (req, res, next) => {
    res.render('about');
});


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

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
  });
  module.exports = app;
