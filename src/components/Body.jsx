import React from "react";
import ApiComponent from "./ApiComponent";

function Body() {
    return (
        <div>
            <h1 className="h1">Characters of Rick and Morty</h1>
            <ApiComponent /> {/* Integra el componente de la API en el cuerpo */}
        </div>
    )
}

export default Body;