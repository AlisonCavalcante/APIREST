const moongose = require('mongoose');

const Funcionario = moongose.model('Funcionario', {
    nome: String,
    email: String,
    funcao: String,
    ultimoAcesso: String,
})

module.exports = Funcionario;