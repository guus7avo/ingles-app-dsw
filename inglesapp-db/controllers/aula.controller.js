const model = require("../models");

const Aula = model.aulaModel;

const create = (request, response) => {
    Aula.create(request.body)
    .then((object)=>{
        response.send(object.dataValues);
    })
    .catch((error)=>{
        console.log(error);
        response.sendStatus(400).send(error);
    });
}

module.exports = {
    create,
}
