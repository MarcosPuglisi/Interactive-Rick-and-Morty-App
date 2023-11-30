import React, { useState } from "react";
import '../styles/Buscador.css';

function Buscador({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const handleKeyPress = (e) => {
        // Verifica si la tecla presionada es "Enter"
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="buscador-form">
            <input
                className="input-busqueda" 
                type="text" 
                placeholder="Search your character for name ..." 
                onChange={handleInputChange}
                onKeyPress={handleKeyPress} 
            />
            <button type="button" className="boton-buscar" onClick={handleSearch}>
                Search 
            </button>            
        </div>
    );
};

export default Buscador;