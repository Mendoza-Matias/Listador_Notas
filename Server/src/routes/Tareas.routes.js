const express = require("express");
const {vistaPrincipal,UnaTarea,crearTarea,editarTarea,eliminarTarea} = require("../controllers/Controllers")
const routes = express.Router();

//Rutas de mi aplicacion
routes.get("/",vistaPrincipal);

routes.get("/Tarea/:id",UnaTarea);

routes.post("/crear",crearTarea);

routes.put("/editar/:id",editarTarea);

routes.delete("/eliminar/:id",eliminarTarea);



module.exports = routes;