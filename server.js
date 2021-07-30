const { Server } = require('http');
const app = require('./app');

app.set('port', 5000);

const server = app.listen(app.get('port'), ()=>{
    console.log('server is running on port :) ' + server.address().port)
})


