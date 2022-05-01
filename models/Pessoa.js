const mongoose = require('mongoose');

// criando a collection no bd
const Pessoa = mongoose.model('Pessoa',{
    email: String,
    senha: String,
    aprovado: Boolean,
})

module.exports = Pessoa;