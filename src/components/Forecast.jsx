import React from 'react';

function Forecast({ hourly }) {
    if (!hourly) return null;

    return (
        <div className="container">
            {hourly.map((hour, index) => (
                <div key={index} className="row">
                    <div className="col mt-4 align-items-center vidro horas">
                        <div className="tempo-definicao">
                            <div className="d-flex align-items-center tempo">
                                <h3>{`${index.toString().padStart(2, '0')}:00`}</h3>
                                <h4>{hour.condition.text}</h4>
                                <img src={hour.condition.icon} alt="Weather icon" />
                            </div>
                            <hr />
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
            ))}
        </div>
    );
}

export default Forecast;
