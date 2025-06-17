let tareas = [];

exports.getTareas = (req, res) => {
    console.log(tareas.length);
    res.json(tareas);
};

exports.addTarea = (req, res) => {
    let { nombre, completed } = req.body;
    let nuevo = { id: Date.now(), nombre, completed };
    tareas.push(nuevo);
    res.status(201).json(nuevo);
};

exports.deleteTarea = (req, res) => {
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