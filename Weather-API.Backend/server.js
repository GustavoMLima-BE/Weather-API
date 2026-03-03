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
    
    const cityRegex = /^[A-Za-zÀ-ÿ\s-]+$/;

    if (!cityRegex.test(city)) {
      return res.status(400).json({ error: 'Nome de cidade inválido' });
    }

    const weather = await getWeather(city);
    res.json(weather);

  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clima' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});