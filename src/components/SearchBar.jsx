import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(inputValue);
        }
    };

    const handleSearchClick = () => {
        onSearch(inputValue);
    };

    return (
        <div className="pesquisa vidro">
            <h1>Verifique a previsão do tempo da sua cidade</h1>
            <h6 className="lead">Digite o nome da sua cidade</h6>

            <div className="row mb-2">
                <div className="col-md-10">
                    <input
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="form-control input"
                        value={inputValue}
                        placeholder="Ex: London, São Paulo, New York"
                    />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary" onClick={handleSearchClick}>Pesquisar</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
