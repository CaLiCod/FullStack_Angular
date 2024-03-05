//Model: nos permite enlazar la estructura a nuestro modelo de mongo con nuestro Schema definido aqui.
//Schema: nos permite definir la estructura de los documentos
const { model, Schema } = require('mongoose');

//Esquema de nuestro documento
const songSchema = new Schema({
    title: String,
    artist: String,
    genre: String,
    album: String,
    duration: Number,
    year: Number,
    trackNumbe: Number,
    isExplicit: Boolean
});

//En el modelo debemos exportar el nombre de nuestra collection y segui el schema.
module.exports = model('song', songSchema);