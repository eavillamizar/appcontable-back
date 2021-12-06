// Aqui en este archivo quedaría toda las definiciones de las rutas referente a este contexto(pare este caso las maes).
// La parte de rutas que estaban contenidas en index.js se reorganizan y se asocian a los controladores.

// exportamos express:
const express = require ("express");
            
// De express traemos un modulo llamado router.
const router = express.Router();

//llamamos los controladores a utilizar en las rutas del contexto la cual lleva el nombre de este archivo.
const MaeController = require( "../controllers/maes")

const checkkAuth = require("../middleware/check-auth");

// Definimos las rutas de este contexto (MAE)
//router.get( '/' , aquí va el controlador )
//router.get('/', MaeController.getMessage);      // la ruta (ruta raiz en este caso), y lo que llama la ruta.

router.get('/', MaeController.getMaes); // el metodo que se va a utilizar "get" y dentro especificamos la ruta y el metodo (la logica) que se va a ejecutar que a la vez se encapsula en un controlador
router.post('/', MaeController.addMae);
router.delete('/:id', checkkAuth, MaeController.deleteMae); // '/:id' con esto reconoce que la url es un parametro (usado en /controllers.posts.js en el metodo deleteMae)
router.put('/:id', MaeController.updateMae);
router.get('/:id', MaeController.getMae);
// exportamos router para su uso afuera
module.exports = router

