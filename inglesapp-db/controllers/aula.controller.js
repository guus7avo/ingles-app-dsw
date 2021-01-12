const model = require("../models");

const Aula = model.aulaModel;

const create = (request, response) => {
    const aulaData = {
        idAula: request.body.idAula,
        titulo: request.body.titulo,
        conteudo: request.body.conteudo,
        cadastradoIdCadastrado: request.body.cadastradoIdCadastrado,
        temaAulaIdTemaAula: request.body.temaAulaIdTemaAula,
    }

    Aula.create(aulaData)
    .then((object)=>{
        response.status(200).send(object.dataValues);   
    })
    .catch((error)=>{
        console.log(error);
        response.status(400).send(error);
    });
};

const getAll = (request, response) => {
    Aula.findAll({
      attributes: [
        "idAula",
        "titulo",
        "conteudo",
        "cadastradoIdCadastrado",
        "temaAulaIdTemaAula",
      ],
      raw: true,
    })
      .then((object) => {
        console.log(object);
        response.status(200);
        response.send(object);
      })
      .catch((error) => response.status(400).send(error));
  };

  const getById = (request, response) => {
    Aula.findByPk(request.params.id)
      .then((object) => {
        response.status(200).send(object.dataValues);
      })
      .catch((error) => {
        console.error(error);
        response.status(400).send(error);
      });
  };

  const alterById = (request, response) => {
        const aulaData = {
            idAula: request.body.idAula,
            titulo: request.body.titulo,
            conteudo: request.body.conteudo,
            cadastradoIdCadastrado: request.params.cadastradoIdCadastrado,
            temaAulaIdTemaAula: request.params.temaAulaIdTemaAula,
        };
  
        Aula.update(aulaData, {
          where: { idAula: aulaData.idAula },
          raw: true,
        })
          .then((object) => {
            response
              .status(200)
              .send("Aula de id = " + request.params.id + " Atualizado!");
          })
          .catch((error) => {
            console.error(error);
            response.status(400).send(error);
          });
  };

  const deleteById = (request, response) => {
    Aula.destroy({
      where: { idAula: request.params.id },
    })
      .then((object) => {
        if (object === 0) {
          response
            .status(200)
            .send("Nenhuma aula foi encontrada para deletar!");
        } else {
          response
            .status(200)
            .send(
              "Aula com id = " + request.params.id + " deletado!"
            );
        }
      })
      .catch((error) => {
        console.error(error);
        response.status(400).send(error);
      });
  };

module.exports = {
    create,
    getAll,
    getById,
    alterById,
    deleteById,
  };
