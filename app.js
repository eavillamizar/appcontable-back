
//Nos traemos a Express: 
const express = require("express");

//Nos traemos a Cor. En el Backend para permitir compartir recursos de origen cruzados, pare este caso con Angular (Frontend)
const cors = require("cors");

// Nos traemos mongoose a la app. Importamos la libreria.
const mongoose = require("mongoose");

//Generamos la instancia de la app:
const app = express();

//Importamos las routes.
const maeRoutes = require("./routes/maes");
const userRoutes = require("./routes/users");

//configuracion de la aplicación:
app.use(express.json());
app.use(express.urlencoded({ extend : false })) ;
app.use(cors());

// Configuracion de la conexion a la bd
mongoose.connect(
    "mongodb+srv://dbUser:RelbXtLOXFoyyQTF@cluster0.ubhsp.mongodb.net/AppContable?retryWrites=true&w=majority"
    ).then(() => {
        console.log("Estamos conectados a nuestra BD");
    }).catch(() => {
        console.log("Miguel Tenemos un Problema");
    });

//compilamos las routes del contexto (mae) en una general y se concatena a la ruta producto.
app.use("/api/maes",maeRoutes);   //Compila estas rutas y aqui hacemos la general y a este le concatenamos la ruta de producto que para nuestro ejemplo es maeRoutes
app.use("/api/users", userRoutes);

//Exportar el archivo
module.exports = app;   //exportando la instancia app


