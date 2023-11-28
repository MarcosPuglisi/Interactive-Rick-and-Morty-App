import React from "react";
import '../styles/header.css';

const Header = ({ onSearch }) => {
    const handleSearch = (e) => {
      onSearch(e.target.value);
    };
  
    return (
      <header className="header">
        <h1>Character Collector</h1>
        <p>Welcome to the interactive world of rick and morty</p>
        <form>
          <input type="text" placeholder="Buscar por nombre o temporada" onChange={handleSearch} />
        </form>
      </header>
    );
  };

export default Header;