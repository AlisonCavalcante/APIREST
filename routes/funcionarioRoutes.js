const router = require('express').Router();
const Funcionario = require('../models/Funcinario');

router.get('/', async (req, res) => {
    try {
      const funcionarios = await Funcionario.find();
       res.status(200).json(funcionarios);
    } catch (error) {
        res.status(500).json({error: error});
    }
})

module.exports = router;