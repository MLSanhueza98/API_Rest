const express = require('express');
const Player = require('./db');

const app = express();
const port = 3000;

app.use(express.json());

//Get
app.get('/players', async (req, res) => {
  try {
    const player = await Player.find();
    res.status(200).json(player);
  } catch (error) {
    res.status(500).send('Error al obtener jugadores');
  }
});

//GetById
app.get('/players/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (Player) {
      res.status(200).json(player);
    } else {
      res.status(404)
    }
  } catch (e) {
    res.status(500).send('Error al obtener jugador');
  }
});

//Post
app.post('/players', async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    const savedPlayer = await newPlayer.save();
    res.status(201).json(savedPlayer);
  } catch (error) {
    res.status(500).send('Error al crear jugador');
  }
});

//Put
app.put('/players/:id', async (req, res) => {
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedPlayer) {
      res.status(200).json(updatedPlayer);
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    res.status(500).send('Error al actualizar datos del jugador');
  }
});

//Delete
app.delete('/players/:id', async (req, res) => {
  try {
    const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
    if (deletedPlayer) {
      res.sendStatus(204);
    } else {
      res.SendStatus(404);
    }
  } catch (error) {
    res.sendStatus(404).send('Error al eliminar jugador');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
