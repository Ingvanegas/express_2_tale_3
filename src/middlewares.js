module.exports.validateName = (req, res, next ) => {
    const name = req.params.name;
    if(/(^[a-z ]+$)/i.test(name)) {
        next();   
    } else {
        res.send('Nombre invalidado');           
    }
}

module.exports.validateId = (req, res, next ) => {
    const id = req.params.id;
    if(/(^[0-9]*$)/i.test(id)) {
        next();  
    } else {
        res.send('Id invalidado');             
    }
}