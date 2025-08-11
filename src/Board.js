import { useApp } from "./AppContext";

const board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function Board() {
  const { boardState, handleDraw } = useApp();

  return (
    <div className="board">
      {board.map((val) => (
        <div
          className={`board-item board--item-${val + 1}`}
          onClick={() => handleDraw(val)}
          key={val}
        >
          <p className={`shape-${boardState[val]}`}>{boardState[val]}</p>
        </div>
      ))}
    </div>
  );
}

export default Board;
