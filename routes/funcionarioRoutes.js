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

module.exports = router;