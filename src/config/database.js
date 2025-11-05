const { Sequelize } = require('sequelize');

const conexao = new Sequelize('sistema_saude', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = conexao;