const Tarea = require('../model/Tarea');

exports.getTareas = async (req, res) => {
    const tareas = await Tarea.find();
    console.log('El numero de tareas es ${tareas.length}');
    res.json(tareas);
};

exports.addTarea = async(req, res) => {
    let { nombre, descripcion, completed } = req.body;
    let nuevo = new Tarea({ id: Date.now(), nombre, descripcion, completed });
    await nuevo.save();
    console.log('Se agregaron nuevas tareas')
    res.status(201).json(nuevo);
};

exports.deleteTarea = (req, res) => {
    //finByIdAndDelete
    let id = Number(req.params.id);
    let tareaExistente = tareas.find((t) => t.id === id);
    if (!tareaExistente) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }
    tareas = tareas.filter((t) => t.id !== id);
    res.json({ message: "Tarea eliminada exitosamente" });
};

exports.editTarea = (req, res) => {
    let id = Number(req.params.id);
    let tareaExistente = tareas.find((t) => t.id === id);
    let { nombre, completed } = req.body;

    if (!tareaExistente) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }

    if (nombre !== undefined) {
        tareaExistente.nombre = nombre;
    }
    if (completed !== undefined) {
        tareaExistente.completed = completed;
    }

    res.status(200).json(tareaExistente);
};