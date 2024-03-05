const express = require('express');
const cors = require('cors');
//cargamos las variables de entorno mediante la libreria dotenv
require('dotenv').config();

//Cargamos el fichero de conexion de la DB
require('./config/db');


//instacia de integracion de las peticiones post, put, etc.
const app = express();


//configuracion, con la siguiente configuracion le indicamos a node que puede trabajar con distintas peticiones
app.use(cors()); //configuracion de las peticiones
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// GET /api/songs
// GET /api/songs/SONGID
//Todas las rutas que contengas /api, las enviaremos al fichero de rutas/api
app.use('/api',require('./routes/api'))


//Tomamos nuestro puerto de las variables de entorno, si no esta colocamos el 3000 por defecto
const PORT = process.env.PORT || 3000;

//puerto de escucha
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});