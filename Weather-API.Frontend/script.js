const button = document.getElementById('searchBtn');
const resultDiv = document.getElementById('result');

button.addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value;

  const cityRegex = /^[A-Za-zÀ-ÿ\s-]+$/;

    if (!cityRegex.test(city)) {
    resultDiv.innerHTML = 'Cidade inválida';
    return;
    }

  if (!city) {
    resultDiv.innerHTML = 'Digite uma cidade';
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/weather/${city}`);
    const data = await response.json();

    resultDiv.innerHTML = `
      <h2>${data.city}</h2>
      <p>Temperatura: ${data.temperature}°C</p>
      <p>Condição: ${data.description}</p>
    `;

  } catch (error) {
    resultDiv.innerHTML = 'Erro ao buscar clima';
  }
});