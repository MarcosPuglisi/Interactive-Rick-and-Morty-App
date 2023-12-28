import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Buscador from '../DataView/Buscador';
import Pagination from '../DataView/Pagination';
import FavoritesList from '../FavoriteList/FavoriteList';
import '../../styles/Cards/card.css';
import '../../styles/Cards/idCard.css';
import '../../styles/favoriteList.css';

const ApiComponent = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 4; // Número de personajes por página
  const [favorites, setFavorites] = useState([]);


  const handleFavoriteClick = () => {
    if (selectedCharacter && !favorites.includes(selectedCharacter)) {
      setFavorites([...favorites, selectedCharacter]);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Resetear a la primera página al realizar una nueva búsqueda
  };

  const handleDetailsClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleRemoveFavorite = (characterToRemove) => {
    const updatedFavorites = favorites.filter(
      (character) => character.id !== characterToRemove.id
    );
    setFavorites(updatedFavorites);
  };

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const filteredCharacters = currentCharacters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    character.episode.some((episode) => episode.includes(searchTerm.toLowerCase()))
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
    <div className='main-container'>
      <div className='content-container'>
      <Buscador onSearch={handleSearch} />
      <div className="character-container">
        {filteredCharacters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <br></br>
            <button type="button" className="boton-details" onClick={() => handleDetailsClick(character)}>
              More Details
            </button>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(characters.length / charactersPerPage)}
        onPageChange={setCurrentPage}
      />
      
      {selectedCharacter && (
        <div className='details-favorites-container'>
          <div className="details-container">
            <img src={selectedCharacter.image} alt={selectedCharacter.name} />
            <div>
              <h2 className='h2'> Details </h2>
              <div className='nameData'>
                <p><b>Name:</b> {selectedCharacter.name}</p>
                <p><b>Status:</b> {selectedCharacter.status}</p>
              </div>
              <div  className='genderData'>
                <p><b>Species:</b> {selectedCharacter.species}</p>
                <p><b>Gender:</b> {selectedCharacter.gender}</p>
              </div>
              <div  className='locationData'>
                <p><b>Origin:</b> {selectedCharacter.origin.name}</p>
                <p><b>Location:</b> {selectedCharacter.location.name}</p>
              </div>
              <div  className='buttonData'>
                <button type="button" className="boton-favorite" onClick={handleFavoriteClick}>
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
          <div className='favorites-container'>
          <FavoritesList favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
          </div>
        </div>
      )}
           
      </div>      
    </div>
  );
};

export default ApiComponent;