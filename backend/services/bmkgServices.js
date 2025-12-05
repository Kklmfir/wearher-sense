import axios from 'axios';

// Example stub: BMKG often provides XML or JSON from endpoints — adapt to the real API you have access to.
export async function getBMKGWeather(lat, lon){
  // for MVP, return mocked structured data or try real BMKG endpoint
  return {
    temperature: 29,
    humidity: 78,
    chance_rain_next_hour: 45,
    area: "Cikarang Selatan"
  };
}
