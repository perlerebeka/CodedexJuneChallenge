import React, { useState } from "react";
import { BeeOne } from "./home";
import { BeeTwo } from "./home";

function PlantInput({ onceSubmitted }) {
  const [species, setSpecies] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = "sk-p7rd6852705b8118711061";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!species || !name) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);

    try {
      // Step 1: Search plant by species name
      const listResponse = await fetch(
        `https://perenual.com/api/v2/species-list?key=${apiKey}&q=${encodeURIComponent(species)}`
      );
      const listData = await listResponse.json();
      console.log(listData);

      if (!listData.data || listData.data.length === 0) {
        setError("No plants found with that species.");
        setLoading(false);
        return;
      }

      const plantId = listData.data[0].id; // Get first matching plant ID

      // Step 2: Fetch detailed info by plant ID
      const detailsResponse = await fetch(
        `https://perenual.com/api/v2/species/details/${plantId}?key=${apiKey}`
      );
      const detailsData = await detailsResponse.json();
      console.log(detailsData);

      if (!detailsData || !detailsData.id) { // check if plant details exist
        setError("No detailed info found for this plant.");
        setLoading(false);
        return;
      }

      const plantDetails = detailsData;

      // Prepare plant info to send back to parent component
      onceSubmitted({
        name,
        species: plantDetails.common_name || species,
        watering: plantDetails.watering_general_benchmark || "No data",
        sunlight: plantDetails.sunlight || "No data",
        id: plantId,
      });

    } catch (err) {
      setError("Failed to fetch plant data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="centered-container">
      <BeeOne />
      <BeeTwo />
      <form className="input-form" onSubmit={handleSubmit}>
        <label>
          Enter your plant's species:
          <input
            type="text"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            required
          />
        </label>
        <label>
          Give it a name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <button className="pixel-btn" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Get care tips"}
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
    </div>
  );
}

export default PlantInput;
