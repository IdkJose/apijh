require("dotenv").config();
let express = require('express');
let app = express();
let tareasRoutes = require('./routes/tareas');
let mongose = require("mongoose")

mongose 
    .connect(process.env.MONGO_URI)
    .then(()=> console.log("Conectado a MongoDB Atlas"))
    .catch((err)=> console.error("Error", err));

app.use(express.json());
app.use('/tareas', tareasRoutes);

app.listen(3000, () => {
    console.log("Corriendo en el puerto 3000");
});