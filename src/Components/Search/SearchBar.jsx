import React from 'react'

function SearchBar({handleSubmit,term,setTerm}) {
    return (

        <div>

        <form onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2 m-2"
          type="search"
          placeholder="Chercher un produit"
          aria-label="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
        </div>
    )
}

export default SearchBar