// importação da biblioteca Express
// para instalar rode o comando: npm install express
const express = require('express');

// criação de um app Express
const app = express();

// importação das rotas
const clienteRotas = require('./routes/Cliente');
const veiculoRotas = require('./routes/Veiculo');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 8080;

// rota de aplicação
app.get('/', (req, res) => {
    res.send('Está é a raiz do servidor');
});

// utilizar as rotas
app.use('/cliente' , clienteRotas);
app.use('/veiculo', veiculoRotas);

// rodar a aplicação
app.listen(port, hostname, console.log('Servidor está rodando'));