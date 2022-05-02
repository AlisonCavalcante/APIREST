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
        .json(departamento);
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

  router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    const departamento = await Departamento.findOne({ _id: id });
  
    // verificando se o usuário existe
    if (!departamento) {
      res.status(422).json({ mensagem: "O departmento não foi encontrado" });
      return;
    }
  
    try {
      await Departamento.deleteOne({ _id: id });
  
      res.status(200).json({ mensagem: "Departamento removido com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });

  module.exports = router;

