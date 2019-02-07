const express = require('express');
const { projects } = require('./data.json');
//const bodyParser = require('body-parser');

const projectsRoutes = require('./routes/projects');
const app = express();


app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.use('/projects', projectsRoutes);

app.use('/', (res, req, next) => {
    res.render('index', { projects });
});

app.use('/about', (res, req, next) => {
    res.render('about');
});



app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
  });
