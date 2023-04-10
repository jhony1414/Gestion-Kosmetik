import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

//const db = new Sequelize('bienesraices.db')
console.log(process.env.DB);

const db = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB,
    define: {
        timestamps: true
    }, 
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
  });

  export default db