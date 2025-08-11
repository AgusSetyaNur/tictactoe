import { useApp } from "./AppContext";

function ChooseShape() {
  const { dispatch } = useApp();
  return (
    <div className="choose-shape">
      <h1>Choose your shape</h1>
      <div className="shape-choice">
        <p onClick={() => dispatch({ type: "shape/selected", payload: "x" })}>
          X
        </p>
        <p onClick={() => dispatch({ type: "shape/selected", payload: "o" })}>
          O
        </p>
      </div>
    </div>
  );
}

export default ChooseShape;
