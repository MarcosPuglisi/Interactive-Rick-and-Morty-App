import React from "react";
import '../styles/Buscador.css';

function Buscador({ onSearch }) {

    const handleSearch = (e) => {
        onSearch(e.target.value);
    };
    return (
        <form className="buscador-form">
            <input
            className="input-busqueda" 
            type="text" 
            placeholder="Buscar por nombre o temporada" 
            onChange={handleSearch} 
            />
            <button type="submit" className="boton-buscar">
                Search 
            </button>            
      </form>
    );
};

export default Buscador;