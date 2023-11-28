import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterDetails = ({ match }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${match.params.id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error al obtener detalles del personaje', error);
      }
    };

    fetchData();
  }, [match.params.id]);

  if (!character) {
    return <p>Cargando detalles del personaje...</p>;
  }

  return (
    <div>
      <h2>{character.name} Details</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
};

export default CharacterDetails;