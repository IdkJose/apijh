let express = require('express');
let app = express();
let tareasRoutes = require('./routes/tareas');

app.use(express.json());
app.use('/tareas', tareasRoutes);

app.listen(3000, () => {
    console.log("Corriendo en el puerto 3000");
});