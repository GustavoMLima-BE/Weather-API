async function buscar() {
    const city = document.getElementById("city").value;

    const response = await fetch(`http://localhost:5000/api/weather/${city}`);
    
    if (response.ok) {
        document.getElementById("result").innerHTML = "cidade não encontrada.";
        return;
    }

    const data = await response.json();

    document.getElementById("result").innerHTML = 
        `
        <h2>${data.city}</h2>
        <p>${data.temperature}°C</p>
        <p>${data.description}</p>
        `;
}