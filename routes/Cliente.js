// importação das bibliotecas 
const express = require('express');

// função para manipulação de rotas
const rotas = express.Router();

// rota get para cliente
rotas.get('/', (req, res) => {
    res.send('Você está na raíz da rota cliente');
})

// rota put para estudante
rotas.put('/', (req, res) => {
    res.send('Você está na rota put para cliente');
})

// rota post para cliente
rotas.post('/', (req, res) => {
    res.send('Você está na rota post para cliente');
})

// rota delete para cliente
rotas.delete('/', (req, res) => {
    res.send('Você está na rota delete para cliente');
})

// exportar o código que manipula a rota para cliente
module.exports = rotas