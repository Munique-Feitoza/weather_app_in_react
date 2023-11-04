import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand text-white" href="#top"> Weather </a>
      </nav>
      <main className="container">
        <div className="jumbotron">
          <h1> Verifique a previsão do tempo da sua cidade! </h1>
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

