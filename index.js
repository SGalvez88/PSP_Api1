const express = require('express');

let api = express();

api.get('/test',(req, res) =>{
    res.send('Conectado al servidor');
});

api.listen(8080,() =>{console.log('escuchando puerto...');});

//api.listen(6000);