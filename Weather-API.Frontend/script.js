document.addEventListener('DOMContentLoaded', () => {

  const button = document.getElementById('searchBtn');
  const resultDiv = document.getElementById('result');
  const input = document.getElementById('cityInput');

  const cityRegex = /^[A-Za-zÀ-ÿ\s-]+$/;

  async function getWeather(city) {

    if (!city) {
      resultDiv.innerHTML = 'Digite uma cidade';
      return;
    }

    if (!cityRegex.test(city)) {
      resultDiv.innerHTML = 'Cidade inválida';
      return;
    }

    try {
      resultDiv.classList.remove('show');
      resultDiv.innerHTML = `<div class="loading">Buscando clima...</div>`;
      const response = await fetch(`http://localhost:5000/api/weather/${city}`);
      const data = await response.json();

      resultDiv.innerHTML = `
        <h2>${data.city}</h2>
        <div class="temp">${data.temperature}°C</div>
        <div class="desc">${data.description}</div>
      `;
      resultDiv.classList.add('show');

    } catch (error) {
      resultDiv.innerHTML = 'Erro ao buscar clima';
    }
  }

  button.addEventListener('click', () => {
    getWeather(input.value.trim());
  });

  getWeather('Praia Grande');

});