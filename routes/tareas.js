let express = require('express');
let router = express.Router();
let tareasController = require("../controllers/tareasController.js");

// router.get('/', (req,res)=>{
//    console.log("Recibí un request")
//    res.json(`{"status":ok}`)
// })

// router.get('/notas', (req, res)=>{
//    console.log("Este es otro request")
//    res.json(`{Otra ruta}`)
// }
// )
router.get('/', tareasController.addTarea); 
router.post('/', tareasController.addTarea);
router.put('/:id', tareasController.editTarea);

module.exports = router;