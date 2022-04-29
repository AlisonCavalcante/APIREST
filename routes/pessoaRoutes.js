const router = require("express").Router();
const Pessoa = require("../models/Pessoa");

// create
router.post("/", async (req, res) => {
  // tratar o corpo da requisicao
  const { nome, salario, aprovado } = req.body;

  console.log(req.body);
  if (!nome) {
    res.status(422).json({ erro: "O nome é Obrigatório" });
    return;
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

// read

router.get("/", async (req, res) => {
  try {
    // recebe todas as pessoas
    const pessoas = await Pessoa.find();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/:id", async (req, res) => {
  // extrair dados da url = req.params
  const id = req.params.id;
  try {
    // recebe uma pessoa específica, filtrando por meio de um parâmetro
    const pessoa = await Pessoa.findOne({ _id: id });

    if (!pessoa) {
      res.status(422).json({ mensagem: "O usuário não foi encontrado" });
      return;
    }

    res.status(200).json(pessoa);
    
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
