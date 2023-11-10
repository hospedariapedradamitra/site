import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const apiKey = 'bcf913fcca8c6cf8929eb7587c2c521a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then(response => {
        setTemperature(response.data.main.temp);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, [city]);

  return (
    <div>
      <span>{city}: </span>
      {temperature !== null ? (
        <span>{temperature}°C</span>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Weather;
