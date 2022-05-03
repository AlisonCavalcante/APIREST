const router = require("express").Router();
const Departamento = require("../models/Departamento");

// Não conseguia obter o objeto com id do bd
// router.post("/", async (req, res) => {
//     // tratar o corpo da requisicao
//     const { nome, telefone } = req.body;

//     console.log(req.body);
//     if (!nome) {
//       res.status(422).json({ erro: "O nome é Obrigatório" });
//       return;
//     }
//     const departamento = {
//       nome,
//       telefone,
//     };
//     try {
//       // esperando salvar e criando dados
//       await Departamento.create(departamento);

//       res
//         .status(201)
//         .json(departamento);
//     } catch (error) {
//       // atribuindo a um erro de servidor
//       res.status(500).json({ error: error });
//     }
//   });

router.post("/", async function (req, res) {
  console.log(req.body);
  let d = new Departamento(req.body);
  await d.save((err, dep) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(dep);
  });
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

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { nome, telefone } = req.body;

  const departamento = {
    nome,
    telefone,
  };

  try {
    const updateDepartameento = await Departamento.updateOne({ _id: id }, departamento);

    // retorna quantos registros foram atualizados
    if (updateDepartameento.matchedCount === 0) {
      res.status(422).json({ mensagem: "O usuário não foi encontrado" });
      return;
    }
    res.status(200).json(departamento);
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
