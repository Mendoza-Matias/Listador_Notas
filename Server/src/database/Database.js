const {Sequelize} = require("sequelize");
const dotenv = require('dotenv').config();


//Creando la base de datos 
const baseDeDatos = new Sequelize(process.env.MYSQL_CLIENT,process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: process.env.DIALECT,
  })

//Contectar base de datos
async function conectarBaseDeDatos(){
    try{
        await baseDeDatos.authenticate()
        console.log("Conexion exitosa")
    }catch(error){
        console.log("Error de conexion")
    }
}

conectarBaseDeDatos()

module.exports = {
  db:baseDeDatos,
};