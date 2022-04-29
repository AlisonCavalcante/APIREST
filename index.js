// import
require('dotenv').config();
const express = require("express");
// inicializando o express em forma de função
const app = express();
const mongoose = require("mongoose");
// acessando o model


// não reconhece o body
// Habilitar o express a receber e enviar json // middlewares
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
app.use(express.json());

// rotas da API
const pessoaRoutes = require('./routes/pessoaRoutes');

app.use('/pessoa', pessoaRoutes);


// rota inicial
app.get("/", (requisicao, response) => {
  response.json({ mensagem: "Servidor Retornando" });
});

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

// conectando ao mongoDB
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.g3ewu.mongodb.net/bdApi?retryWrites=true&w=majority`
  ) // promisse
  .then(() => {
    console.log("Conectamos ao mongoDB");
    app.listen(4001);
  })
  .catch((err) => console.log(err));

// mongodb+srv://alison:IZsgfuwOGmTG1hz4@apicluster.g3ewu.mongodb.net/bdApi?retryWrites=true&w=majority
