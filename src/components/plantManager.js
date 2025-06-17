import React from "react";

function PlantManager({ plant, onBack }) {
  // Dummy data for demonstration
  const plantInfo = {
    species: plant.species || "Cactus",
    light: "Part shade",
    water: "Every 4-7 days",
    lastWatered: "2025.06.11",
    mood: "Happy",
    message: "You are doing great so far! Make sure you water me according to my needs, and I'll be with you for a long time!",
  };

  return (
    <div className="plant-manager-container">
      <div className="plant-header">
        <div className="plant-name">{plant.name}</div>
        <div className="plant-info-box">
          <div>Walter's species: {plantInfo.species}</div>
          <div>Walter's light: {plantInfo.light}</div>
          <div>Walter's water: {plantInfo.water}</div>
          <div>Last time watered: {plantInfo.lastWatered}</div>
          <button className="pixel-btn small-btn">Water</button>
        </div>
      </div>
      <img src="/assets/plant-pot.png" alt="plant pot" className="main-plant" />
      <button className="pixel-btn small-btn">Change pot</button>
      <div className="plant-message-box">
        <div>Walter's mood: {plantInfo.mood}</div>
        <div>Walter's message for you:</div>
        <div className="plant-message">{plantInfo.message}</div>
      </div>
    </div>
  );
}

export default PlantManager;
