const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://API-Rest:fAWlliJQviOsuj3k@cluster0.5dbiopl.mongodb.net/Players?retryWrites=true&w=majority')
  .then(() => console.log('Conexión exitosa con la DB'))
  .catch(e => console.error('Error al conectar con la DB:', e));


const playerSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    pais: String,
    equipo: String,
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;