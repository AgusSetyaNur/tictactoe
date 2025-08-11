import ChooseShape from "./ChooseShape";
import Header from "./Header";
import PlayGround from "./PlayGround";
import PlayMode from "./PlayMode";
import { useApp } from "./AppContext";

function App() {
  const { mode, player, activePlayer } = useApp();
  return (
    <div className="App">
      <Header />
      {player[activePlayer].shape ? (
        <PlayGround />
      ) : mode ? (
        <ChooseShape />
      ) : (
        <PlayMode />
      )}
    </div>
  );
}

export default App;
