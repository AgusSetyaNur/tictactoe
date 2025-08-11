import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import WinnerScreen from "./WinnerScreen";
import { useApp } from "./AppContext";

function PlayGround() {
  const { winner } = useApp();
  return (
    <div className="playground">
      {winner ? <WinnerScreen /> : <Board />}
      <ScoreBoard />
    </div>
  );
}

export default PlayGround;
