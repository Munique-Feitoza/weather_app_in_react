import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
  
  const [city, setCity] = useState("Rio de Janeiro");
  const [weatherForecast, setWeatherForecast] = useState(null);
  
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  
  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=b1171bd7d4124bbc8d6142849230411&q=${city}&lang=pt`)
      .then((response) => {
        if(response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setWeatherForecast(data);
        console.log(data)
      })
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand text-white" href="#top"> Weather </a>
      </nav>
      <main className="container">
        <div className="jumbotron">
          <h1> Verifique a previsão do tempo da sua cidade! </h1>
          <p className="lead"> Digite sua cidade no campo abaixo e em seguida clique em pesquisar</p>
          
          <div className="row mb-4">
            <div className="col-md-6">
              <input
                onChange={handleChange}
                className="form-control" 
                value={city} 
              />
            </div>
          </div>
          
          <button
            onClick={handleSearch}
            className="btn btn-primary btn-lg"> Pesquisar
          </button>
          
          {
            weatherForecast ? (
             <div>
                <div className="mt-4 d-flex align-items-center">
                  <div>
                    <img src={weatherForecast.current.condition.icon} />
                  </div>
                  
                  <div>
                    <h3> Hoje o dia está: {weatherForecast.current.condition.text} </h3>
                    <p className="lead"> Temperatura: {weatherForecast.current.temp_c} </p>
                  </div>
                  
                </div>
              </div>
            ) : null
          }
         
        </div>
      </main>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

