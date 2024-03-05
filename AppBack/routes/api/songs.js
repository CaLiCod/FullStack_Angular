//Encargado de gestionar el ruteo del API

//Extraemos el router de express
const router = require('express').Router();

const Song = require('../../models/song.model');

//Peticion tipo GET sobre /api/song
router.get('/', async (req, res) => {
    try {
        //Consultamos todos los documentos
        const songs = await Song.find();
        res.json(songs);
    } catch (error) {
        res.json({ error: error.messager });
    }
});
//Peticion tipo GET sobre /api/song/:songID
router.get('/:songId', async (req, res) => {
    //Extraemos el valor del id
    const { songId } = req.params;
    //Consultamos por ID
    const song = await Song.findById(songId);
    res.json(song);

});

//exportamos el router como modulo
module.exports = router;