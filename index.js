const express = require('express');
const server = express();
const db = require('./data/dbConfig');

server.use(express.json());

server.get('/api/cars', async (req, res) => {
  try{
    const cars = await db('cars');
    res.status(200).json(cars);
  } catch(err) {
    res.status(500).json({ error: "Database Error" });
  }
})

server.post('/api/cars', async (req, res) => {
  try {
    const car = await db('cars').insert(req.body);
    res.status(201).json(car);
  } catch(err) {
    res.status(500).json({ error: "Database Error" });
  }
})

const PORT = process.env.PORT || 9000;

server.listen(5000, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
})