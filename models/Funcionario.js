const moongose = require('mongoose');
var Schema = moongose.Schema;

const funcionarioSchema = new Schema({
  nome: String,
  email: String,
  funcao: String,
  ultimoAcesso: String
}, {versionKey: false});

module.exports = moongose.model('Funcionario', funcionarioSchema);

