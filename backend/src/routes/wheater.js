async function loadWeather(lat, lon) {
  const res = await fetch(`/weather?lat=${lat}&lon=${lon}`);
  const data = await res.json();

  document.getElementById("weather-section").innerHTML = `
    <h2>Cuaca Sekarang</h2>
    <p>Suhu: ${data.temperature}°C</p>
    <p>Kelembapan: ${data.humidity}%</p>
    <p>Kondisi: ${data.weatherDesc}</p>
  `;
}
