
const { DataTypes } = require('sequelize');
const sequelize = require('../controllers/PacienteController'); 

const Paciente = sequelize.define('Paciente', {
  nome_completo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  sexo: {
    type: DataTypes.ENUM('M', 'F'),
    allowNull: false,
  },
  ala: {
    type: DataTypes.ENUM('A', 'B'),
    allowNull: false,
  },
  quarto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Paciente;
