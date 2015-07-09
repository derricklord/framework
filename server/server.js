var express = require('express');
var morgan = require('morgan');

var app = express();

var port = process.env.PORT || 3000;

//app.use(morgan('combined'));
app.use(express.static('./client/'));

app.listen(port, launchMsg);

function launchMsg(){
    console.log('Server listening on port: ' + port);
}