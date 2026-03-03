require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/weather/:city', async (req, res) => {
  const city = req.params.city;
  res.send(`Cidade recebida: ${city}`);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});