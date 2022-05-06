const router = require('express').Router();
const Requisicao = require('../models/Requisicao');


router.post('/', async function(req, res) {
    console.log(req.body);
    let r = new Requisicao(req.body);
   await r.save((err, requi) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send(requi);
    })
});

module.exports = router;