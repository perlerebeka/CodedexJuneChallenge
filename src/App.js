import React, { useState } from "react";
import Home from "./components/home";
import PlantInput from "./components/input";
import PlantManager from "./components/plantManager";
import "./App.css";
import "@fontsource/pixelify-sans"
import "@fontsource/pixelify-sans/400.css"
import "@fontsource/pixelify-sans/700.css"


function App() {
  const [screen, setScreen] = useState("home");
  const [plantData, setPlantData] = useState(null);

  // Dummy handler for plant submission
  const handlePlantSubmit = (data) => {
    setPlantData(data);
    setScreen("manager");
  };

  return (
    <div className="app-bg">
      {screen === "home" && <Home onAddPlant={() => setScreen("input")} />}
      {screen === "input" && (
        <PlantInput onceSubmitted={handlePlantSubmit} onBack={() => setScreen("home")} />
      )}
      {screen === "manager" && plantData && (
        <PlantManager plant={plantData} onBack={() => setScreen("home")} />
      )}
    </div>
  );
}

export default App;
