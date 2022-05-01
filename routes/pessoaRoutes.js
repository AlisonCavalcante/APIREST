const router = require("express").Router();
const Pessoa = require("../models/Pessoa");

// create
router.post("/", async (req, res) => {
  // tratar o corpo da requisicao
  const { email, senha, aprovado } = req.body;

  console.log(req.body);
  if (!email) {
    res.status(422).json({ erro: "O email é Obrigatório" });
    return;
  }

  const pessoa = {
    email,
    senha,
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

router.get("/:email", async (req, res) => {
  // extrair dados da url = req.params
  const email = req.params.email;
  try {
    // recebe uma pessoa específica, filtrando por meio de um parâmetro
    const pessoa = await Pessoa.findOne({ email: email });

    if (!pessoa) {
      res.status(422).json({ mensagem: "O usuário não foi encontrado" });
      return;
    }

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// update

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { email, senha, aprovado } = req.body;

  const pessoa = {
    email,
    senha,
    aprovado,
  };

  try {
    const updatePessoa = await Pessoa.updateOne({ _id: id }, pessoa);

    // retorna quantos registros foram atualizados
    if (updatePessoa.matchedCount === 0) {
      res.status(422).json({ mensagem: "O usuário não foi encontrado" });
      return;
    }

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Delete

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const pessoa = await Pessoa.findOne({ _id: id });

  // verificando se o usuário existe
  if (!pessoa) {
    res.status(422).json({ mensagem: "O usuário não foi encontrado" });
    return;
  }

  try {
    await Pessoa.deleteOne({ _id: id });

    res.status(200).json({ mensagem: "Usuário removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
