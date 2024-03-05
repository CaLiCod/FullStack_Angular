//Especificaremos como conectar a la DB
const mongoose = require('mongoose');

//Realizamos la conexion a mongo con la db mediante la variable de entorno que contiene nuestra cadena de conexion.
mongoose.connect(process.env.MONGO_URI);