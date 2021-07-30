const express = require('express');
const mustache = require('mustache-express');
const axios = require('axios')

const app = express();

router = require('./routes/router');
/*

app.use( async function(req,res,next){
    try {
        const {data} = await axios.get('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')
        return res.locals.h = data
    } catch (error) {
        console.error(error)
    } 
    next()
})

*/


app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.engine('mustache', mustache(__dirname + '/views/partials', '.mustache'));
app.set('view engine', 'mustache'); 
app.set('views',__dirname + '/views');

app.use('/', router);

module.exports = app;


    