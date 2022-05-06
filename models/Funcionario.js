const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const funcionarioSchema = new Schema({
  nome: String,
  email: String,
  funcao: String,
  ultimoAcesso: String,
  departamentoId: {type:  mongoose.Schema.Types.ObjectId, ref: 'Departamento'}
}, {versionKey: false});

module.exports = mongoose.model('Funcionario', funcionarioSchema);

