const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movimentacaoSchema = new Schema({
    funcionarioId: {type: mongoose.Types.ObjectId, ref: 'Funcionario'},
    dataHora: String,
    status: String,
    descricao: String,
},{versionKey: false})

module.exports = mongoose.model('Movimentacao', movimentacaoSchema);