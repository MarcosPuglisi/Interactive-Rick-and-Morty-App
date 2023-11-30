import React from 'react';
import '../styles/favoriteList.css';

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      <h2 className='h2'>Favorites</h2>
      <ul>
        {favorites.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;