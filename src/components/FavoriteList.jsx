import React from 'react';
import '../styles/favoriteList.css';

const FavoritesList = ({ favorites, onRemoveFavorite }) => {
  return (
    <div>
      <h2 className='h2'>Favorites</h2>
      <ul>
        {favorites.map((character) => (
          <li key={character.id}>
            {character.name}
            <span className="remove-icon" onClick={() => onRemoveFavorite(character)}>
              <i className="fas fa-trash-alt"></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;