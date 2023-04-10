import { DataTypes } from "sequelize";
import db from '../config/db.js'

 
const Categoria = db.define('Categoria', {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
export default Categoria