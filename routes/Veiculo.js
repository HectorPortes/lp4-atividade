// importação das bibliotecas 
const express = require('express');

// função para manipulação de rotas
const rotas = express.Router();

// rota get para veiculo
rotas.get('/', (req, res) => {
    res.send('Você está na raíz da rota veiculo');
})

// rota put para estudante
rotas.put('/', (req, res) => {
    res.send('Você está na rota put para veiculo');
})

// rota post para veiculo
rotas.post('/', (req, res) => {
    res.send('Você está na rota post para veiculo');
})

// rota delete para veiculo
rotas.delete('/', (req, res) => {
    res.send('Você está na rota delete para veiculo');
})

// exportar o código que manipula a rota para veiculo
module.exports = rotas