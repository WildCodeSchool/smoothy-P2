import React, { useState, useEffect } from "react";
import Pet from "./Pet.jsx";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    console.log("use effect");
    requestPets();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const url = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;
    const res = await fetch(url);
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breeed={pet.breeed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
