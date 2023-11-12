import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=b1171bd7d4124bbc8d6142849230411&q=${city}&lang=pt`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setWeatherForecast(data);
      })
  }

  useEffect(() => {
    // Carregar a previsão do tempo ao iniciar a página e sempre que a cidade mudar
    if (city) {
      handleSearch();
    }
  }, [city]);

  const renderHourlyForecast = () => {
    if (weatherForecast) {
      return weatherForecast.forecast.forecastday[0].hour.map((hour, index) => (
        <div key={index} className="container">
          <div className="mt-4 d-flex align-items-center vidro horas">
            <div>
              <div className="d-flex tempo">
                <h3>{`${index.toString().padStart(2, '0')}:00`}</h3>
                <img src={hour.condition.icon} />
              </div>
              <h5>{hour.condition.text}</h5>
              <p>Temperatura: {hour.temp_c}°C</p>
              <p>Sensação: {hour.feelslike_c}°C</p>
              <p>Chuva: {hour.chance_of_rain}%</p>
            </div>
          </div>
        </div>
      ));
    }
    return null;
  };

  return (
    <div className="conteudoTotal">
      <nav className="navbar navbar-expand-md mb-4 vidro">
        <a className="navbar-brand" href="#top"> Weather </a>
      </nav>
      <main className="container">
        <div className="pesquisa vidro">
          <h1>Verifique a previsão do tempo da sua cidade</h1>
          <h6 className="lead">Digite sua cidade e pesquise</h6>

          <div className="row mb-2">
            <div className="col-md-8">
              <input
                onChange={handleChange}
                className="form-control input"
                value={city}
              />
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="btn btn-primary btn-lg button"
          >
            Pesquisar
          </button>
        </div>
      </main>

      {renderHourlyForecast()}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
