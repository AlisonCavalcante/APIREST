const router = require('express').Router();
const Movimentacao = require('../models/Movimentacao');

router.post('/', async function(req, res) {
    console.log(req.body);
    let m = new Movimentacao(req.body);
   await m.save((err, mov) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send(mov);
    })
});

module.exports = router;