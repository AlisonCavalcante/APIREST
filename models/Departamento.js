const mongoose = require('mongoose');

// criando a collection no bd
const Departamento = mongoose.model('Departamento',{
    nome: String,
    telefone: String,
})

module.exports = Departamento;