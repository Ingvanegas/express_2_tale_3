const express = require('express');
const bodyparser = require('body-parser');
const compression = require('compression');
const data = require('./data');
const middlewares = require('./middlewares');

const server = express();

server.use(bodyparser.json());
server.use(compression());

server.get('/getById/:id', middlewares.validateId, (req, res)=> {
    const result = data.info.filter(f => f.id == req.params.id);
    res.send(result);
});

server.get('/getByName/:name', middlewares.validateName,(req, res)=> {
    const result = data.info.filter(f => f.name == req.params.name);
    res.send(result);
});

server.listen(3000, ()=> {
    console.log(`El Api esta corriendo en el puerto 3000`)
})