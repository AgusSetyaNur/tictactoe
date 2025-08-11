import { useApp } from "./AppContext";

function PlayMode() {
  const { dispatch } = useApp();
  return (
    <div className="play-mode">
      <h1>Choose play mode</h1>
      <div className="play--mode-choice">
        <p
          onClick={() => dispatch({ type: "mode/selected", payload: "single" })}
        >
          Single Player
        </p>
        <p
          onClick={() => dispatch({ type: "mode/selected", payload: "multi" })}
        >
          Multi Player
        </p>
      </div>
    </div>
  );
}

export default PlayMode;
