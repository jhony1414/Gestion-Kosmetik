import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Movimiento = db.define('Movimiento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  concepto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  importe: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Movimiento;




