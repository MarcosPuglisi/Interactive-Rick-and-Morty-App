import React from 'react';
import '../styles/favoriteList.css';

const FavoriteListEpisode = ({ favoritos, onAgregarFavorito }) => {
    return (
        <div>
          <h2 className='h2'>Episodios Favoritos</h2>
          <ul>
            {favoritos.map((episodio) => (
              <li key={episodio.id}>
                {episodio.name}
                <span className="remove-icon" onClick={() => onAgregarFavorito(episodio)}>
                  <i className="fas fa-trash-alt"></i>
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    };
export default FavoriteListEpisode;