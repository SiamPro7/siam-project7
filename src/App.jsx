import Cards from "./Component/Cards";
import Navbar from "./Component/Navbar";
import "./App.css";
import PromoBanner from "./Component/PromoBanner";
import { useState } from "react";

import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [coin, setCoin] = useState(0);
  
   const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showAvailable, setShowAvailable] = useState(true);


  const increaseCoin = () => {
   toast.success("Coins added!");
    setCoin(coin + 10000);
  };

  // decrease coin function
 const decreaseCoin = (player) => {
  // Check if the player is already in the selectedPlayers array
  const isPlayerSelected = selectedPlayers.some(
    (selected) => selected.playerId === player.playerId
  );

  if (isPlayerSelected) {
    // Show an alert if the player is already selected
     toast.warn("This player is already selected!");
    return;
  }

   if (selectedPlayers.length >= 6) {
     toast.error("You can only select up to 6 players."); // Notify the user
     return;
   }

  // If enough coins, add the player to selectedPlayers and decrease coins
  if (coin >= 10000) {
    setCoin(coin - 10000);
    setSelectedPlayers([...selectedPlayers, player]);
    toast.success("Congratulations! You have bought him.");
  } else {
    toast.error("You do not have enough money.");
  }
};

 

   const toggleSection = () => {
     setShowAvailable(!showAvailable);
   };

  return (
    <>
      <Navbar coin={coin}></Navbar>

      <PromoBanner onButtonClick={increaseCoin}></PromoBanner>
      <div className="button">
        <button
          onClick={() => setShowAvailable(true)}
          className={`black ${showAvailable ? "active" : ""}`}
        >
          Available
        </button>
        <button
          onClick={() => setShowAvailable(false)}
          className={`black ${!showAvailable ? "active" : ""}`}
        >
          Selected {selectedPlayers.length}
        </button>
      </div>

      {showAvailable ? (
        <Cards onSelectPlayer={decreaseCoin} />
      ) : (
        <div className="selected-players">
          <h3>Selected Players {selectedPlayers.length} /6</h3>
          {selectedPlayers.map((player) => (
            <div key={player.playerId} className="selected-player-card">
              {/* Render the selected player details */}
              <img src={player.image} alt={player.name} />
              <h2>{player.name}</h2>
              <p>{player.country}</p>
             <button> <i class="fa-solid fa-trash"></i></button>
            </div>
          ))}
        </div>
      )}

      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
