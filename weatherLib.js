const axios = require("axios");

async function getWeather(city) {
  const response = await axios.get(`http://localhost:3000/weather/${city}`);
  return response.data;
}

module.exports = { getWeather };
