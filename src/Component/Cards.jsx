import { useEffect } from "react";
import { useState } from "react";
import PlayerCard from "./PlayerCard";

const Cards = ({ onSelectPlayer }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/pleyrs.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      <div className="button-flex">
        <div>
          <h3>Available Players {players.length}</h3>
        </div>
      </div>

      <div className="players-grid">
        {players.map((player) => (
          <PlayerCard
            key={player.playerId}
            player={player}
            onSelectPlayer={() => onSelectPlayer(player)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
