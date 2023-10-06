const { Sequelize } = require('sequelize');
const { desenvolvimentoPetshop } = require('./config.js');

const conexao = new Sequelize(desenvolvimentoPetshop);
conexao.sync()
    .then(() => {
        console.log('Conectado ao banco com sucesso!')
    })
    .catch((error) => {
        console.log('Não conectou ao banco de dados', error)
    })

module.exports = conexao;

