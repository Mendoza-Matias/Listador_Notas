const express = require("express");
const dotenv = require("dotenv").config();
const routes = require("./routes/Tareas.routes");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());

//Rutas
app.use(routes);


const puerto = process.env.PORT

app.listen(puerto,async()=>{
    try {
        console.log("Servidor conectado" +" "+ puerto);
    } catch (error) {
        console.log("Error de conexión" + error);
    }
});