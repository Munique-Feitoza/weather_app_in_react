import React from 'react';

function CurrentWeather({ current, today, location }) {
    if (!current || !today) return null;

    const { day, astro } = today;

    return (
        <div className="container vidro">
            <div className="mt-4 d-flex align-items-center">
                <div>
                    <img className="imagemHoje" src={current.condition.icon} alt="Current weather icon" />
                </div>
                <div className="textoPesquisa">
                    <h3>{location?.name}, {location?.region}</h3>
                    <p>Agora está: {current.condition.text} </p>
                    <p className="lead"> Temperatura: {current.temp_c}°C </p>
                </div>
            </div>
            <hr />
            <div className="d-flex">
                <div className="definicao">
                    <p>Temperatura máxima: {day.maxtemp_c}°C</p>
                    <p>Temperatura média: {day.avgtemp_c}°C</p>
                    <p>Temperatura mínima: {day.mintemp_c}°C</p>
                </div>
                <div className="definicao">
                    <p>Lua: {astro?.moon_phase || 'N/A'}</p>
                    <p>Nascer do sol: {astro?.sunrise || 'N/A'}</p>
                    <p>Pôr do sol: {astro?.sunset || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;
