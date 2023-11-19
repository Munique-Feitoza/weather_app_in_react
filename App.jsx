import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [city, setCity] = useState("rio de janeiro");
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
      });
  };

  useEffect(() => {
    if (city) {
      handleSearch();
    }
  }, [city]);

  const renderHourlyForecast = () => {
    if (weatherForecast) {
      return weatherForecast.forecast.forecastday[0].hour.map((hour, index) => (
        <div key={index} className="row">
          <div className="col mt-4 align-items-center vidro horas">
            <div className="tempo-definicao">
              <div className="d-flex align-items-center tempo">
                <h3>{`${index.toString().padStart(2, '0')}:00`}</h3>
                <h4>{hour.condition.text}</h4>
                <img src={hour.condition.icon} alt="Weather icon" />
              </div>
              <hr/>
              <div className="d-flex">
                <div className="definicao">
                  <p>Humidade: {hour.humidity}%</p>
                  <p>Índice UV: {hour.uv}</p>
                  <p>Índice de calor: {hour.heatindex_c}°C</p>
                </div>
                <div className="definicao">
                  <p>Temperatura: {hour.temp_c}°C</p>
                  <p>Sensação: {hour.feelslike_c}°C</p>
                  <p>Chuva: {hour.chance_of_rain}%</p>
                </div>
                <div className="definicao">
                  <p>Direção do vento: {hour.wind_dir}</p>
                  <p>Vento frio: {hour.windchill_c}°C</p>
                  <p>Velocidade do vento: {hour.wind_kph}km/h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
    }
    return null;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md mb-4 vidro">
        <a className="navbar-brand" href="#top"> Weather </a>
      </nav>
      <main className="container">
        <div className="pesquisa vidro">
          <h1>Verifique a previsão do tempo da sua cidade</h1>
          <h6 className="lead">Digite o nome da sua cidade</h6>

          <div className="row mb-2">
            <div className="col-md-10">
              <input
                onChange={handleChange}
                className="form-control input"
                value={city}
              />
            </div>
            <button className="btn col-md-10 btn-primary" onClick={handleSearch}>Click</button>
          </div>
        </div>
      </main>
      {
        weatherForecast && (
          <div className="container-principal">
            <div className="container vidro">
              <div className="mt-4 d-flex align-items-center">
                <div>
                  <img className="imagemHoje" src={weatherForecast.current.condition.icon} alt="Current weather icon" />
                </div>
                <div className="textoPesquisa">
                  <h3>Agora está: {weatherForecast.current.condition.text} </h3>
                  <p className="lead"> Temperatura: {weatherForecast.current.temp_c}°C </p>
                </div>
              </div>
              <hr/>
              <div>
              //detalhes a adicionar
              </div>
            </div>
            <div className="container">
            {renderHourlyForecast()}
            </div>
          </div>
        )
      }
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);