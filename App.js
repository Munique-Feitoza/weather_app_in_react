import React, { useState } from 'react';
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

  return (
    <div className="conteudoTotal">
      <nav className="navbar navbar-expand-md mb-4 vidro">
        <a className="navbar-brand" href="#top"> Weather </a>
      </nav>
      <main className="container">
        <div className="pesquisa vidro">
          <h1> Verifique a previsão do tempo da sua cidade </h1>
          <h6 className="lead"> Digite sua cidade e pesquise</h6>
          
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
            className="btn btn-primary btn-lg button"> Pesquisar
          </button>
        </div>
      </main>
      
          {
            weatherForecast ? (
            <div>
             <div className="container">
                <div className="mt-4 d-flex align-items-center vidro">
                  <div>
                    <img className="imagemHoje" src={weatherForecast.current.condition.icon} />
                  </div>
                  <div className="textoPesquisa">
                    <h3>Agora está: {weatherForecast.current.condition.text} </h3>
                    <p className="lead"> Temperatura: {weatherForecast.current.temp_c}°C </p>
                  </div>
                  
                </div>
              </div>
              
              <div className="container">
              <div className="container d-flex">
              <div className="container">
                <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 00:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[0].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[0].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[0].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[0].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[0].chance_of_rain}%</p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="mt-4 d-flex align-items-center vidro horas">
                  <div>
                  <div className="d-flex tempo">
                   <h3> 01:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[1].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[1].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[1].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[1].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[1].chance_of_rain}%</p>
                  </div>
                </div>
              </div>
              <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 02:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[2].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[2].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[2].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[2].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[2].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               </div>
               <div className="container d-flex">
               <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 03:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[3].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[3].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[3].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[3].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[3].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
                <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 04:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[4].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[4].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[4].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[4].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[4].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 05:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[5].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[5].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[5].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[5].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[5].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               </div>
               <div className="container d-flex">
               <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 06:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[6].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[6].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[6].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[6].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[6].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
                <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 07:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[7].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[7].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[7].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[7].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[7].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 08:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[8].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[8].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[8].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[8].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[8].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               </div>
               <div className="container d-flex">
               <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 09:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[9].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[9].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[9].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[9].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[9].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
                <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 10:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[10].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[10].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[10].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[10].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[10].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 11:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[11].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[11].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[11].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[11].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[11].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               </div>
               <div className="container d-flex">
              <div className="container">
                <div className="mt-4 d-flex align-items-center vidro horas">
                  <div>
                  <div className="d-flex tempo">
                   <h3> 12:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[12].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[12].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[12].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[12].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[12].chance_of_rain}%</p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="mt-4 d-flex align-items-center vidro horas">
                  <div>
                  <div className="d-flex tempo">
                   <h3> 13:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[13].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[13].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[13].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[13].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[13].chance_of_rain}%</p>
                  </div>
                </div>
              </div>
              <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 14:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[14].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[14].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[14].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[14].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[14].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               </div>
               <div className="container d-flex">
               <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 15:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[15].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[15].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[15].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[15].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[15].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
                <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 16:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[16].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[16].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[16].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[16].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[16].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 17:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[17].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[17].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[17].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[17].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[17].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               </div>
               <div className="container d-flex">
               <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 18:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[18].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[18].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[18].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[18].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[18].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
                <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 19:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[19].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[19].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[19].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[19].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[19].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 20:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[20].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[20].condition.text}</h5>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[20].feelslike_c}°C</p>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[20].temp_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[20].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               </div>
               <div className="container d-flex">
               <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 21:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[21].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[21].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[21].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[21].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[21].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
                <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 22:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[22].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[22].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[22].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[22].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[22].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               <div className="container">
               <div className="mt-4 d-flex align-items-center vidro horas">
                <div>
                  <div className="d-flex tempo">
                   <h3> 23:00 </h3>
                    <img src={weatherForecast.forecast.forecastday[0].hour[23].condition.icon} />
                  </div>
                    <h5>{weatherForecast.forecast.forecastday[0].hour[23].condition.text}</h5>
                    <p>Temperatura: {weatherForecast.forecast.forecastday[0].hour[23].temp_c}°C</p>
                    <p>Sensação: {weatherForecast.forecast.forecastday[0].hour[23].feelslike_c}°C</p>
                    <p>Chuva: {weatherForecast.forecast.forecastday[0].hour[23].chance_of_rain}%</p>
                  </div>
                </div>
               </div>
               </div>
              </div>
            </div>
            ) : null
          }
         
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);