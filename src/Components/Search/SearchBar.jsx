import React from "react";

function SearchBar(props) {
  const { term, handleChange, handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-css">
       <input
          value={term}
          type="text"
          placeholder="Rechercher..."
          onChange={handleChange}
          className="input-css"
        />
        <button className="button-css">Go</button> 
      </form>
    </div>
  );
}

export default SearchBar;
