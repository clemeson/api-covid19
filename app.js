const express = require('express');
const mustache = require('mustache-express');
const axios = require('axios')

const app = express();

router = require('./routes/router');

//middleware json() para reconheceder objetos json
app.use(express.json());

app.use(express.static(__dirname + '/public'));

//configurando mustache-engine
app.engine('mustache', mustache(__dirname + '/views/partials', '.mustache'));
app.set('view engine', 'mustache'); 
app.set('views',__dirname + '/views');


app.use('/', router);
module.exports = app; 