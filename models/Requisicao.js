const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requisicaoSchema = new Schema({
  solicitanteId: {type:  mongoose.Schema.Types.ObjectId, ref: 'Funcionario'},
  dataAbertura: String,
  ultimaAtualizacao: String,
  descricao: String,
  status: String,
  destino: {type: mongoose.Schema.Types.ObjectId, ref: 'Departamento'},
  movimentacaoId: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movimentacao'}]
})

module.exports = mongoose.model('Requisicao', requisicaoSchema);