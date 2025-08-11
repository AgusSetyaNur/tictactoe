import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import WinnerScreen from "./WinnerScreen";
import { useApp } from "./AppContext";

function PlayGround() {
  const { winner } = useApp();
  console.log(winner);
  return (
    <div className="playground">
      {winner ? <WinnerScreen /> : <Board />}
      <ScoreBoard />
    </div>
  );
}

export default PlayGround;
