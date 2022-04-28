// import
const express = require("express");
// inicializando o express em forma de função
const app = express();

const mongoose = require("mongoose");

// Habilitar o express a receber e enviar json // middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (requisicao, response) =>{
    
    response.json({mensagem: 'Servidor Retornando'});
})


// conectando ao mongoDB
mongoose.connect('mongodb+srv://alison:IZsgfuwOGmTG1hz4@apicluster.g3ewu.mongodb.net/bdApi?retryWrites=true&w=majority'
) // promisse
.then(() => {
  console.log('Conectamos ao mongoDB');
  app.listen(4001);
})
.catch((err) => console.log(err));


// mongodb+srv://alison:IZsgfuwOGmTG1hz4@apicluster.g3ewu.mongodb.net/bdApi?retryWrites=true&w=majority