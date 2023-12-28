import React, { useState, useEffect } from 'react';
import Pagination from '../DataView/Pagination';
import FavoriteListEpisode from '../FavoriteList/FavoriteListEpisode';
import '../../styles/Cards/card.css';
import '../../styles/favoriteList.css';
import '../../styles/body.css';

const ApiEpisodes = () => {
  const [episodios, setEpisodios] = useState([]);
  const [episodiosAMostrar, setEpisodiosAMostrar] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [detallesContenedor, setDetallesContenedor] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const episodiosPorPagina = 4; // Número de episodios por página

  useEffect(() => {
    const obtenerEpisodios = async () => {
      try {
        const respuesta = await fetch('https://rickandmortyapi.com/api/episode');
        const datos = await respuesta.json();
        setEpisodios(datos.results);
        // Inicialmente, mostramos los episodios de la primera página
        setEpisodiosAMostrar(datos.results.slice(0, episodiosPorPagina));
      } catch (error) {
        console.error('Error al obtener episodios:', error);
      }
    };

    obtenerEpisodios();
  }, [episodiosPorPagina]);

  const cambiarPagina = (pagina) => {
    const indicePrimerEpisodio = (pagina - 1) * episodiosPorPagina;
    setEpisodiosAMostrar(episodios.slice(indicePrimerEpisodio, indicePrimerEpisodio + episodiosPorPagina));
    setPaginaActual(pagina);
  };

  const manejarClickEpisodio = (episodio) => {
    // Configuramos el contenedor de detalles para mostrar los detalles del episodio
    setDetallesContenedor(
      <div className="details-container-video">
        <div>
          <h2 className='h2'> Espisode: {episodio.name} </h2>
          <h5 className='h2'>Number: {episodio.episode}</h5>
          <span className='movie-icons'>
            <i className="fab fa-youtube"></i>
          </span>
          <button type="button" className="boton-favorite" onClick={() => agregarAFavoritos(episodio)}>Add to Favorites</button>
        </div>
      </div>
    );
  };

  const agregarAFavoritos = (episodio) => {
    if (!favoritos.includes(episodio)) {
      setFavoritos([...favoritos, episodio]);
    }
  };

  return (
    <div>
      <div className='episodes-favorites-container'>
        <div className="character-container">
          {episodiosAMostrar.map((episodio) => (
            <div
              key={episodio.id}
              className={`episode-card`}
              onClick={() => manejarClickEpisodio(episodio)}
            >
              <h5>{episodio.name}</h5>
              <div className='icon-yt'>
                <span className='footer-icons'>
                  <i className="fab fa-youtube"></i>
                </span>
              </div>
            </div>
          ))}
        </div>

        {detallesContenedor}

        <div className="favorites-container">
          <FavoriteListEpisode favoritos={favoritos} onAgregarFavorito={(episodio) => setFavoritos(favoritos.filter(fav => fav.id !== episodio.id))} />
        </div>
      </div>

      <Pagination
        currentPage={paginaActual}
        totalPages={Math.ceil(episodios.length / episodiosPorPagina)}
        onPageChange={cambiarPagina}
      />
    </div>
  );
};

export default ApiEpisodes;