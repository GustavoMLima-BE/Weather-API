async function getWeather(city) {
  const apiKey = process.env.VISUAL_CROSSING_API_KEY;

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}&unitGroup=metric&lang=pt`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Erro ao buscar dados da API externa');
  }

  const data = await response.json();

  if (
    data.resolvedAddress &&
    !data.resolvedAddress.toLowerCase().includes(city.toLowerCase())
    ) {
    throw new Error('Cidade não encontrada');
    }

  return {
    city: data.address,
    temperature: data.currentConditions.temp,
    description: data.currentConditions.conditions
  };
}

module.exports = { getWeather };