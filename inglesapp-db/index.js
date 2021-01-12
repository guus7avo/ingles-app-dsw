const express = require("express");
const model = require("./models");
const routes = require("./routes/aula.route")
const cors = require("cors");

const app = express();
const TemaAula = model.temaaulaModel;
const Cargo = model.cargoModel;
const Cadastrado = model.cadastradoModel;
const Aula = model.aulaModel;

app.use(express.json());

app.use((req, res, next) => {
    //console.log("Acessou o Middleware!");
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    app.use(cors());
    next();
})

// Configura as rotas no servidor express
app.use("", routes);

// Endpoint para criar um endereço
app.post("/temaAula", (request, response)=>{
    //Promises
    TemaAula.create(request.body)
    .then((object)=>{
        response.send(object);
    })
    .catch((error)=>{
        console.log(error);
        response.sendStatus(500);
    });
});

app.post("/cargo", (request, response)=>{
    //Promises
    Cargo.create(request.body)
    .then((object)=>{
        response.send(object);
    })
    .catch((error)=>{
        console.log(error);
        response.sendStatus(500);
    });
});

app.post("/cadastrado", (request, response)=>{
    //Promises
    Cadastrado.create(request.body)
    .then((object)=>{
        response.send(object);
    })
    .catch((error)=>{
        console.log(error);
        response.sendStatus(500);
    });
});

app.post("/aula", (request, response)=>{
    //Promises
    Aula.create(request.body)
    .then((object)=>{
        response.send(object);
    })
    .catch((error)=>{
        console.log(error);
        response.sendStatus(500);
    });
});

// Endpoint para buscar um endereço por id
app.get("/temaAula/:id", (request, response) => {
    const id = request.params.id;
    TemaAula.findByPk(id)
        .then((object)=>{
            response.send(object);
        })
        .catch((error)=>{
            console.log(error);
            response.sendStatus(500);
        });
});

app.get("/cargo/:id", (request, response) => {
    const id = request.params.id;
    Cargo.findByPk(id)
        .then((object)=>{
            response.send(object);
        })
        .catch((error)=>{
            console.log(error);
            response.sendStatus(500);
        });
});

app.get("/cadastrado/:id", (request, response) => {
    const id = request.params.id;
    Cadastrado.findByPk(id)
        .then((object)=>{
            response.send(object);
        })
        .catch((error)=>{
            console.log(error);
            response.sendStatus(500);
        });
});

app.get("/aula/:id", (request, response) => {
    const id = request.params.id;
    Aula.findByPk(id)
        .then((object)=>{
            response.send(object);
        })
        .catch((error)=>{
            console.log(error);
            response.sendStatus(500);
        });
});

// Inicialização do servidor
app.listen(8888, (request, response) =>{
    console.log("Servidor ouvindo na porta 8888");
});