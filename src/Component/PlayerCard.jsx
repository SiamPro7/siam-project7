const PlayerCard = ({ player, onSelectPlayer }) => {
  return (
    <div className="player-card">
      <img src={player.image} alt={player.name} className="player-image" />
      <div className="player-details">
        <h2>
          <i class="fa-solid fa-user"></i> {player.name}
        </h2>
        <div className="c-flex">
          <p>
            <i class="fa-solid fa-flag"></i> {player.country}
          </p>
          <p>
            <strong>{player.role}</strong>
          </p>
        </div>
        <hr />
        <div className="player-info">
          {/* div-1 */}
          <div>
            <p>{player.battingType}</p>

            <p>
              <strong>
                Price:<i class="fa-solid fa-dollar-sign"></i>
              </strong>{" "}
              {player.biddingPrice}
            </p>
          </div>
          {/* div-2 */}
          <div>
            <p>{player.bowlingType}</p>
            
            <button onClick={onSelectPlayer} className="choose-player-btn">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
