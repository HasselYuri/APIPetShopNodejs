const { DataTypes } = require('sequelize');
const conexao = require('../database.js');
const Cliente = require('../models/cliente.js');

const Cachorro = conexao.define('cachorros', {
    idCachorro: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nomeCachorro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    racaCachorro: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
})

Cachorro.belongsTo(Cliente, { 
    constraint: true, 
    foreignKey: 'id' 
})

Cliente.hasMany(Cachorro, {
    foreignKey: 'id'
})

module.exports = Cachorro