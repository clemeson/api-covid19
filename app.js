const express = require('express');
const mustache = require('mustache-express');

const app = express();

router = require('./routes/router');




app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.engine('mustache', mustache(__dirname + '/views/partials', '.mustache'));
app.set('view engine', 'mustache'); 
app.set('views',__dirname + '/views/home');

app.use('/', router);


module.exports = app;


