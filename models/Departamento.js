const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departamentoSchema = new Schema({
    nome: String,
    telefone: String,
}, {versionKey: false});


// criando a collection no bd, método que não conseguia retornar o id do bd no post
// const Departamento = mongoose.model('Departamento',{
//     nome: String,
//     telefone: String,
// })

module.exports = mongoose.model('Departamento', departamentoSchema);