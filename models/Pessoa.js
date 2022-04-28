const mongoose = require('mongoose');

// criando a collection no bd
const Pessoa = mongoose.model('Pessoa',{
    nome: String,
    salario: Number,
    aprovado: Boolean,
})

module.exports = Pessoa;