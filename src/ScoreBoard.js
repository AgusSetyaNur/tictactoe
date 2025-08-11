import { useApp } from "./AppContext";

function ScoreBoard() {
  const { player, handleReset, handlePlayAgain, activePlayer, mode } = useApp();
  const { player1, player2 } = player;
  return (
    <>
      <div className="scoreboard">
        <div
          className={`player-score ${
            activePlayer === "player1" ? "active" : ""
          }`}
        >
          <h3>Player 1({player1.shape})</h3>
          <p>{player1.score}</p>
        </div>
        <div
          className={`player-score ${
            activePlayer === "player2" ? "active" : ""
          }`}
        >
          <h3>
            {mode === "single" ? "Computer" : "Player 2"}({player2.shape})
          </h3>
          <p>{player2.score}</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handlePlayAgain}>Play again</button>
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>
    </>
  );
}

export default ScoreBoard;
