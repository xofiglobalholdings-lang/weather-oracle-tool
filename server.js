const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
    );

    res.json({
      city: city,
      temperature: response.data.main.temp,
      weather: response.data.weather[0].description
    });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

app.listen(3000, () => {
  console.log("Weather Oracle running on port 3000");
});
