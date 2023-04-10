import { DataTypes } from "sequelize";
import db from '../config/db.js'

 
const Proveedor = db.define('Proveedor', {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
export default Proveedor