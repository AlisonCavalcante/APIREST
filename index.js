// import
const express = require("express");
// inicializando o express em forma de função
const app = express();
const mongoose = require("mongoose");
// acessando o model
const Pessoa = require("./models/Pessoa");

// não reconhece o body
// Habilitar o express a receber e enviar json // middlewares
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
app.use(express.json());

// rotas da API

app.post("/pessoa", async (req, res) => {
  // tratar o corpo da requisicao
  const { nome, salario, aprovado } = req.body;

  console.log(req.body);
  if (!nome) {
    res.status(422).json({ erro: "O nome é Obrigatório" });
  }

  const pessoa = {
    nome,
    salario,
    aprovado,
  };

  try {
    // esperando salvar e criando dados
    await Pessoa.create(pessoa);

     response
       .status(201)
       .json({ mensagem: "Pessoa Inserida no Sistema com Sucesso!" });
  } catch (error) {
    // atribuindo a um erro de servidor
    res.status(500).json({ error: error });
  }
});

// rota inicial
app.get("/", (requisicao, response) => {
  response.json({ mensagem: "Servidor Retornando" });
});

// conectando ao mongoDB
mongoose
  .connect(
    "mongodb+srv://alison:IZsgfuwOGmTG1hz4@apicluster.g3ewu.mongodb.net/bdApi?retryWrites=true&w=majority"
  ) // promisse
  .then(() => {
    console.log("Conectamos ao mongoDB");
    app.listen(4001);
  })
  .catch((err) => console.log(err));

// mongodb+srv://alison:IZsgfuwOGmTG1hz4@apicluster.g3ewu.mongodb.net/bdApi?retryWrites=true&w=majority
