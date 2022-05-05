const moongose = require('mongoose');
var Schema = moongose.Schema;

const funcionarioSchema = new Schema({
  nome: String,
  email: String,
  funcao: String,
  ultimoAcesso: String,
  departamentoId: {type:  moongose.Schema.Types.ObjectId, ref: 'Departamento'}
}, {versionKey: false});

module.exports = moongose.model('Funcionario', funcionarioSchema);

