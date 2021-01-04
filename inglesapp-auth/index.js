const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const LocalStrategy = require("passport-local").Strategy;
const { request, response } = require("express");

const app = express();
app.use(express.json());

app.use(
    cookieSession({
        name: "S3cret",
        keys: ["vueauthrandomkey"],
        maxAge: 30 * 60 * 1000, //30 minutos
    })
);
const users = [
    {
        id: 1,
        user: "Usuário 1",
        email: "user@email.com",
        pwd: "123"
    }
]
passport.use(
    new LocalStrategy({
        usernameField: "user",
        passwordField: "pwd"
    },
    (username, password, done) => {
        let user = users.find((user) => {
            return user.email === username && user.pwd === password; 
        })

        if(user)
            done(null, user);
        else
            done(null, false, {message: "Usuário e/ou senha inválidos"});
    })
);

app.use(passport.initialize());
app.use(passport.session());

//back->front
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//front->back
passport.deserializeUser((id, done) => {
    const user = users.find((user) => {
        return user.id === id;
    });
})

app.use(cors({credentials: true, origin: "http://localhost:8080"}));

app.post("/api/login", (request, response, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) return next(err);

        if (!user)
            return response.status(400).send([user, "Não foi possível logar", info]);

        request.login(user, (err)=>{
            response.send("Logado");
        });
    })(request, response, next);
});

const authMiddleware = (request, response, next)=>{
    if(request.isAuthenticated()){
        next();
    } else {
        response
            .status(401)
            .send("Você não está autorizado a utilizar esse recurso");
    }
};

app.get("/api/user", authMiddleware, (request, response) => {
    //buscar o usuário logado na base de dados
    const user = users.find(user =>{
        return user.id === request.session.passport.user;
    })

    //envia os dados do usuário logado
    response.send({userid: user.id, username: user.user});
});

app.get("/api/logout", (request, response) => {
    request.logout();
    console.log("logged out");
    request.send();
});

app.listen("3030", (request, response) => {
    console.log("Servidor ouvindo na porta 3030");
});
