import React, { useState } from "react";
import ApiComponent from "./ApiComponent";
import ApiEpisodes from "./ApiEpisodes";
import '../styles/body.css';

function Body() {
  const [selectedContainer, setSelectedContainer] = useState(""); // Cambia el estado inicial a una cadena vacía

  return (
    <div>
      <div className='characters-episodes-container'>
        <div
          className={`characters-body-container ${selectedContainer === "characters" ? "active" : ""}`}
          onClick={() => setSelectedContainer("characters")}
        >
          <div>
            <h2 className='h2'> Characters </h2>
            <span className='footer-icons'>
              <i className="fab fa-youtube"></i>
            </span>
          </div>
        </div>

        <div
          className={`episodes-body-container ${selectedContainer === "episodes" ? "active" : ""}`}
          onClick={() => setSelectedContainer("episodes")}
        >
          <h2 className='h2'> Episodes </h2>
          <span className='footer-icons'>
            <i className="fab fa-youtube"></i>
          </span>
        </div>
      </div>

      {selectedContainer === "characters" && (
        <>
          <h1 className="h1">Characters of Rick and Morty</h1>
          <ApiComponent />
        </>
      )}

      {selectedContainer === "episodes" && (
        <>
          <h1 className="h1">Episodes of Rick and Morty</h1>
          <ApiEpisodes />
        </>
      )}
    </div>
  );
}

export default Body;