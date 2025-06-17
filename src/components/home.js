import React from "react";
import beeLeft from '../assets/bee_left.png'
import beeRight from '../assets/bee_right.png'
import { motion } from "framer-motion";
import Spritesheet from "react-responsive-spritesheet";
import plantSprite from "../assets/jumping_plant.png"; 


export function PlantJump() {
  return (
    <Spritesheet className="main-plant"
      image={plantSprite}
      widthFrame={64}    // width of each frame in px
      heightFrame={80}   // height of each frame in px
      steps={4}          // total frames in the spritesheet
      fps={3}            // frames per second (adjust for smoothness)
      autoplay={true}
      loop={true}
    />
  );
}

export function BeeOne() {
  return (
    <div>
      <motion.img
        src={beeLeft}
        alt="Bee"
        style={{ width: 40, height: 40, position: "absolute", top: 30 }}
        animate={{
          x: [700, -600],
          y: [190, 10],           
        }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,

        }}
      />
    </div>
  );
}
export function BeeTwo() {
  return (
    <div>

      <motion.img
        src={beeRight}
        alt="Bee"
        style={{ width: 60, height: 60, position: "absolute", top: 30 }}
        animate={{
          x: [-800, 600],
          y: [300, -40],
          rotate: [-20]           // move from 0 to 200
        }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,

        }}
      />
    </div>
  );
}


function Home({ onAddPlant }) {
  return (
    <div className="centered-container">
      <BeeOne />
      <BeeTwo />
      <h1 className="pixel-title">Keep me Alive</h1>
      <p className="subtitle">Your cute pixel art plant care companion.</p>
      <PlantJump />
      <button className="pixel-btn" onClick={onAddPlant}>
        Add Plant
      </button>
    </div>
  );
}

export default Home;
