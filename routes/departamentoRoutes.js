const router = require("express").Router();
const Departamento = require("../models/Departamento");

router.post("/", async (req, res) => {
    // tratar o corpo da requisicao
    const { nome, telefone } = req.body;
  
    console.log(req.body);
    if (!nome) {
      res.status(422).json({ erro: "O nome é Obrigatório" });
      return;
    }
  
    const departamento = {
      nome,
      telefone,
    };
  
    try {
      // esperando salvar e criando dados
      await Departamento.create(departamento);
  
      res
        .status(201)
        .json({ mensagem: "Departamento Inserido no Sistema com Sucesso!" });
    } catch (error) {
      // atribuindo a um erro de servidor
      res.status(500).json({ error: error });
    }
  });

  router.get("/", async (req, res) => {
    try {
      // recebe todos os departamentos
      const departamentos = await Departamento.find();
      res.status(200).json(departamentos);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });


  module.exports = router;

