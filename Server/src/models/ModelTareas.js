const {Sequelize,DataTypes} = require("sequelize");

//Requiriendo la base de datos y creando el modelo
const baseDeDatos = require('../database/Database').db;

//Creo el modelo en la base de datos y lo defino como es.

const Task = baseDeDatos.define('Task',{
  id:{
    type:DataTypes.INTEGER.ZEROFILL.UNSIGNED,
    primaryKey:true,
    autoIncrement:true,
    
  },
  task_name:{
    type:DataTypes.STRING,
    validate:{
      notNull:false,
    }
  },
  task_data:{
    type:DataTypes.TEXT,
    validate:{
      notNull:false,
    }
  },
  task_time:{
    type:DataTypes.DATEONLY,
    validate:{
      isDate:true,
    }
  }
},{
  timestamps:false
}

  );

  module.exports = Task;