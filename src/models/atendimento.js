const { DataTypes } = require('sequelize');
const conexao = require('../database.js');
const Cachorro = require('../models/cachorro.js');

const Atendimento = conexao.define('atendimentos', {
    idAtendimento: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    dataAtendimento: {
        type: DataTypes.TIME
    },
    valorAtendimento: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    statusAtendimento: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    idCachorro: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
})

Atendimento.belongsTo(Cachorro, { 
    constraint: true, 
    foreignKey: 'idCachorro' 
})

Cachorro.hasMany(Atendimento, {
    foreignKey: 'idCachorro'
})

module.exports = Atendimento