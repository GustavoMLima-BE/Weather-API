require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { getWeather } = require('./Services/weatherService');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Weather API rodando');
});

app.get('/api/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;

    if (!city) {
      return res.status(400).json({ error: 'Cidade é obrigatória' });
    }

    const weather = await getWeather(city);

    res.json(weather);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Erro ao buscar clima' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});