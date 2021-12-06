
// Esta es una estructura para configurar el servidor backend.
// Ya esta diseñado para que se deje un puerto dinamico y no mas adelente pueda generar un problema
// cuando hagamos el despliegue a produccion.

const app = require("./app");   //se importa el archivo app 
const http = require("http");   // se llama una nueva libreria interna de javascript que se llama http. 

//Se crea una nueva funcion llamada normalizePort que va buscar normalizar un puerto.
//Proceso logico que busca que nuestro puerto quede con un formato que funcione. mas abajo se llama esta funcion cuando estamos definiendo la constante del puerto.
const normalizePort = (val) => {     
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

// La siguiente funcion va a capturar si existe un error en terminos de levantar el servidor. 
// por ejemplo si el puerto esta abierto o cerrado, si ese puerto lo esta usando otro aplicativo o no, si no tenemos permisos para trabajar sobre ese puerto
const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// Esta funcion trae la direccion del servidor y la guarda en la constante addr y el puerto en la constante bind.
const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  console.log(`Backend app listening at ${addr.address}:${port}`);
};

// Se Define el puerto.
const port = normalizePort(process.env.PORT || "3000");    // Definiendo la constante del puerto, que ejecuta la funcion normalizePort que recibe un parametro. Ese parametro se calcula: o es una variable de ambiente(process.env.PORT --> Geroku lo va a necesitar para que el solito se configure) ó usar el puerto 3000.
app.set("port", port); //Se define el puerto

// Se crea el servidor (en este caso se crea el Servidor http)
const server = http.createServer(app); // Se crea el servidor http que recibe app (del archivo app.js).
server.on("error", onError);  //se munta la funcion onError que se ejecuta si hay un error.
server.on("listening", onListening); // la funcion onListening 
server.listen(port);  //El servidor se pone a escuchar o se se pone a ejecutar en este puerto(port).


