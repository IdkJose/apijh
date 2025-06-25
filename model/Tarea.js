const mongoose = require("mongoose");

const tareaSchema = new mongoose.Schema({
    nombre:{type:String, require:true},
    descripcion: {type:String,require:false},
    completed:{type:Boolean,default:false},
});

module.exports = mongoose.model('Tarea',tareaSchema)

