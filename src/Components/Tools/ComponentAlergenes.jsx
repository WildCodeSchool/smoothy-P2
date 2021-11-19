import React from 'react'

function ComponentAlergenes({products,arrayFilter}) {
    return (
        <div className="allAlergenes">
        {" "}
        <span role="img" aria-label="warning">
          {" "}
          ⚠️{" "}
        </span>{" "}
        {products[0].allergens_from_ingredients.split(',').forEach(elt => !elt.startsWith('en:') ? arrayFilter.push(elt.trim()):'none')}
        {products[0].allergens_from_ingredients 
        ? `Ce produit contient : ${[...new Set (arrayFilter)].join(", ").toUpperCase()}`
        : "Pas d'allergène renseigné sur ce produit"}
      </div>
      )
    };
export default ComponentAlergenes
