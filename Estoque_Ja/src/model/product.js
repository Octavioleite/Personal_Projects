const { Sequelize, DataTypes } = require('sequelize');
const database = require('../db');

const Product = database.define('product', {
  codigoProduto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nomeProduct: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precoProduct: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantidadeProduct: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dateProduct: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: false // Se não precisar de colunas de timestamps (createdAt, updatedAt)
});

module.exports = Product;
