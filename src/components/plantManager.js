import React from "react";
import happyPlant from "../assets/happy_plant.png";

function PlantManager({ plant }) {
  return (
    <div className="centered-container-plant">
      <div className="left-side">
        <div className="plantName">{plant.name}</div>
        <img className="plant" src={happyPlant} alt="plant" />
        <button className="potButton">Change pot</button>
      </div>
      <div className="right-side">
        <div className="infoPanel">
          <div><span>{plant.name}'s species:</span> {plant.species}</div>
          <div><span>{plant.name}'s light needs:</span> {plant.sunlight[0]}</div>
          <div><span>{plant.name}'s watering needs:</span> Every {plant.watering.value} days</div>

          <button className="pixel-btn small-btn">Water</button>
        </div>
        <div className="plant-message-box">
          <div><span>{plant.name}'s mood:</span> Happy</div>
          <div><span>{plant.name}'s message for you:</span></div>
          <div className="plant-message">
            You are doing great so far! Make sure you water me according to my needs, and I'll be with you for a long time!
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantManager;
