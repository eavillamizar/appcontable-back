// Aqui en este archivo quedaría toda las definiciones de las rutas referente a este contexto(pare este caso las maes).
// La parte de rutas que estaban contenidas en index.js se reorganizan y se asocian a los controladores.

// exportamos express:
const express = require ("express");
            
// De express traemos un modulo llamado router.
const router = express.Router();

//llamamos los controladores a utilizar en las rutas del contexto la cual lleva el nombre de este archivo.
const UserController = require( "../controllers/users");


// Definimos las rutas de este contexto (MAE)

router.post('/signup', UserController.signup); //llamamos el metodo que se va a utilizar "post" y dentro especificamos la ruta y el metodo (la logica) que se va a ejecutar que a la vez se encapsula en un controlador
router.post('/login', UserController.login);
//router.get("/:userId", UserController.getUser);
//router.post("/getToken", UserController.getToken);

// exportamos router para su uso afuera
module.exports = router