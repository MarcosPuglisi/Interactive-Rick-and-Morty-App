import React, { useState, useEffect } from 'react';
import '../styles/card.css';
import Pagination from './Pagination';

const ApiEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [charactersToShow, setCharactersToShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [detailsContainer, setDetailsContainer] = useState(null);
  const charactersPerPage = 4; // Número de personajes por página

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/episode');
        const data = await response.json();
        setEpisodes(data.results);
        // Inicialmente, mostramos los personajes de la primera página
        setCharactersToShow(data.results.slice(0, charactersPerPage));
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, [charactersPerPage]);

  const handlePageChange = (page) => {
    // Calculamos el índice del primer personaje para la página seleccionada
    const indexOfFirstCharacter = (page - 1) * charactersPerPage;
    // Actualizamos los personajes que se deben mostrar según la página seleccionada
    setCharactersToShow(episodes.slice(indexOfFirstCharacter, indexOfFirstCharacter + charactersPerPage));
    // Actualizamos la página actual
    setCurrentPage(page);
  };

  const handleCharacterClick = (character) => {
    // Configuramos el contenedor de detalles para mostrar los detalles del personaje
    setDetailsContainer(
      <div className="details-container">
        <div>
          <h2 className='h2'> Episode: {character.name} </h2>
          <h5 className='h2'>num: {character.episode}</h5>
          <span className='movie-icons'>
              <i className="fab fa-youtube"></i>
            </span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="character-container">
        {charactersToShow.map((character) => (
          <div
            key={character.id}
            className={`character-card`}
            onClick={() => handleCharacterClick(character)}
          >
            <h5>{character.name}</h5>
            <span className='footer-icons'>
              <i className="fab fa-youtube"></i>
            </span>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(episodes.length / charactersPerPage)}
        onPageChange={handlePageChange}
      />

      {detailsContainer}
    </div>
  );
};

export default ApiEpisodes;