const router = require('express').Router();
const Pessoa = require("../models/Pessoa");

router.post("/", async (req, res) => {
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
  
       res
         .status(201)
         .json({ mensagem: "Pessoa Inserida no Sistema com Sucesso!" });
    } catch (error) {
      // atribuindo a um erro de servidor
      res.status(500).json({ error: error });
    }
  });

  module.exports = router;