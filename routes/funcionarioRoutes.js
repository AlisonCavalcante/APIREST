const router = require('express').Router();
const Funcionario = require('../models/Funcionario');

router.get('/', async (req, res) => {
    try {
      const funcionarios = await Funcionario.find();
       res.status(200).json(funcionarios);
    } catch (error) {
        res.status(500).json({error: error});
    }
});

router.post('/', async function(req, res) {
    console.log(req.body);
    let f = new Funcionario(req.body);
   await f.save((err, fun) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send(fun);
    })
});

router.patch("/:id", async (req, res) => {
    const id = req.params.id;
  
    const { _id ,nome, email, funcao, ultimoAcesso, departamentoId } = req.body;
   
    console.log(req.body)

    const funcionario = {
      _id,
      nome,
      email,
      funcao,
      ultimoAcesso,
      departamentoId
    };
  
    try {
      const updateFuncionario = await Funcionario.updateOne({ _id: id }, funcionario);
  
      // retorna quantos registros foram atualizados
      if (updateFuncionario.matchedCount === 0) {
        res.status(422).json({ mensagem: "O funcionário não foi encontrado" });
        return;
      }
      res.status(200).json(funcionario);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });

  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
  
    const funcionario = await Funcionario.findOne({ _id: id });
  
    // verificando se o usuário existe
    if (!funcionario) {
      res.status(422).json({ mensagem: "O Funcionário não foi encontrado" });
      return;
    }
  
    try {
      await funcionario.deleteOne({ _id: id });
  
      res.status(200).json({ mensagem: "Funcionário removido com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });

module.exports = router;