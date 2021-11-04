import React from 'react'

function SearchBar(props) {
    const {term, handleChange, handleSubmit } = props;
    return (
      <div>
         <form onSubmit={handleSubmit}>
          <input
            value={term}
            type="text"
            placeholder="Chercher un produit"
            onChange={handleChange}
          />
          <button>Search</button>
        </form>
      </div>
    )
}

export default SearchBar