import React, { useState } from "react";
import beeImage from '../assets/bee_right.png'

function PlantInput({ onSubmit, onBack }) {
  const [species, setSpecies] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (species && name) {
      onSubmit({
        name,
        species,
        // Add more fields as needed
      });
    }
  };

  return (
    <div className="centered-container">
      <img src= {beeImage} alt="bee" className="bee bee-left" />
      <img src= {beeImage} alt="bee" className="bee bee-right" />
      <form className="input-form" onSubmit={handleSubmit}>
        <label>
          Enter your plant's species
          <input
            type="text"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            required
          />
        </label>
        <label>
          Give it a name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <button className="pixel-btn" type="submit">
          Get care tips
        </button>
      </form>
    </div>
  );
}

export default PlantInput;
