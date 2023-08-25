//CONTROLADORES
const Tareas = require("../models/ModelTareas");
//Vista principal

const vistaPrincipal = async(req,res)=>{
    try {
        const tareasGuardadas = await Tareas.findAll();
        res.status(202).json({tareas:tareasGuardadas});
    } catch (error) {
        res.status(404).json({mensaje:"Hubo un error"});
    }
};

//-----
const UnaTarea = async(req,res)=>{
    try {
        const Tarea = await Tareas.findOne({
            where:{
                id:req.params.id
            }
        });
        res.status(202).json({UnaTarea:Tarea});
    } catch (error) {
        res.status(404).json({mensaje:"Hubo un error"});
    }
};

//CONTROLADOR PARA CREAR UNA TAREA
const crearTarea = async(req,res)=>{
    try {
         
        const tareaNueva = await Tareas.create(req.body)
        
        res.status(201).json({mensaje:"Tarea creada exitosamente"});
        
    } catch (error) {
        res.status(406).json({mensaje:"No se a podido crear una tarea"})

        console.log(error)
    }
}

const editarTarea = async(req,res)=>{
    try {
        const actualizar = await Tareas.update(req.body,{
            where:{
                id:req.params.id
            }
        })

        res.status(201).json({mensaje:"Tarea actualizada"})

    } catch (error) {
        res.status(406).json({mensaje:"Error al editar una tarea"})
    }
}

const eliminarTarea = async(req,res)=>{
    try {
        const quitarTarea = await Tareas.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json({mensaje:quitarTarea})
    } catch (error) {
        res.status(404).json({mensaje:"Error al eliminar una tarea"})
    }
}

module.exports = {
    vistaPrincipal,
    UnaTarea,
    crearTarea,
    editarTarea,
    eliminarTarea
};
