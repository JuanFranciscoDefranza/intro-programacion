var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('HelloWorld');
});

app.get('/otra-ruta', function(req, res){
    res.send('Otrocontenido');
});

app.listen(3000);