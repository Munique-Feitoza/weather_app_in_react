import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

function App() {
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (searchCity) => {
    setLoading(true);
    setError(null);
    setWeatherForecast(null);

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    // Fallback if env not set (for safety in this demo, though should be in env)
    const key = apiKey;

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${searchCity}&lang=pt`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Cidade não encontrada ou erro na API.");
        }
      })
      .then((data) => {
        setWeatherForecast(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md mb-4 vidro">
        <a className="navbar-brand" href="#top"> Weather </a>
      </nav>
      <main className="container">
        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="d-flex justify-content-center mt-4">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="alert alert-danger mt-4" role="alert">
            {error}
          </div>
        )}

        {weatherForecast && (
          <div className="container-principal">
            <CurrentWeather
              current={weatherForecast.current}
              today={weatherForecast.forecast.forecastday[0]}
              location={weatherForecast.location}
            />
            <Forecast
              hourly={weatherForecast.forecast.forecastday[0].hour}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;