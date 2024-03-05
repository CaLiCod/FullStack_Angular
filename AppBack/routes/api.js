//Encargado de gestionar el ruteo del API

//Extraemos el router de express
const router = require('express').Router();

//Todas las rutas que incluyan /songs, se enviaran al archivo de songs
router.use('/songs', require('./api/songs'));

//exportamos el router como modulo
module.exports = router;