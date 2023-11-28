import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/card.css';

const ApiComponent = () => {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
      setSearchTerm(term);
    };
  
    // Filtra los personajes según el término de búsqueda
    const filteredCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.episode.some(episode => episode.includes(searchTerm.toLowerCase()))
    );
  

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://rickandmortyapi.com/api/character');
          setCharacters(response.data.results);
        } catch (error) {
          console.error('Error al obtener datos de la API', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="character-container">
        {filteredCharacters.map(character => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        ))}
      </div>
    );
  };

export default ApiComponent;