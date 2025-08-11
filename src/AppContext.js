import { createContext, useContext, useEffect, useReducer } from "react";

// const [boardState, setBoardState] = useState(Array(9).fill(null));
const AppContext = createContext();
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const initialState = {
  mode: "",
  boardState: Array(9).fill(null),
  winner: null,
  player: {
    player1: {
      shape: "",
      score: 0,
    },
    player2: {
      shape: "",
      score: 0,
    },
  },
  activePlayer: "player1",
};
function reducer(state, action) {
  switch (action.type) {
    case "mode/selected":
      return { ...state, mode: action.payload };
    case "shape/selected":
      return {
        ...state,
        player: {
          ...state.player,
          player1: { ...state.player.player1, shape: action.payload },
          player2: {
            ...state.player.player2,
            shape: action.payload === "x" ? "o" : "x",
          },
        },
      };

    case "place/selected":
      const currPlayer = state.activePlayer;
      return {
        ...state,
        boardState: action.payload,
        activePlayer: currPlayer === "player1" ? "player2" : "player1",
      };
    case "winner/selected":
      return {
        ...state,
        winner: state.activePlayer,
        player: {
          ...state.player,
          [state.activePlayer]: {
            ...state.player[state.activePlayer],
            score: state.player[state.activePlayer].score + 1,
          },
        },
      };
    case "playAgain/selected":
      return {
        ...state,
        mode: "",
        boardState: initialState.boardState,
        winner: null,
        player: {
          ...state.player,
          player1: { ...state.player.player1, shape: "" },
          player2: { ...state.player.player2, shape: "" },
        },
      };
    case "reset/selected":
      return {
        ...initialState,
      };
    case "draw/happened":
      return {
        ...state,
        winner: "draw",
      };
    default:
      throw new Error("unknown action type");
  }
}
function AppProvider({ children }) {
  const [{ mode, player, activePlayer, winner, boardState }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(
    function () {
      if (boardState.every((el) => el !== null))
        return dispatch({ type: "draw/happened" });
    },
    [boardState]
  );

  function handleDraw(id) {
    if (winner) return;
    if (boardState[id]) return;

    const newBoard = [...boardState];
    newBoard[id] = player[activePlayer].shape;
    if (checkWinner(newBoard)) {
      dispatch({ type: "winner/selected" });
      return;
    }
    dispatch({ type: "place/selected", payload: newBoard });
  }

  function checkWinner(board) {
    return winCombination.some((combo) =>
      combo.every((index) => board[index] === player[activePlayer].shape)
    );
  }

  function handlePlayAgain() {
    dispatch({ type: "playAgain/selected" });
  }
  function handleReset() {
    dispatch({ type: "reset/selected" });
  }

  return (
    <AppContext.Provider
      value={{
        mode,
        player,
        activePlayer,
        dispatch,
        winner,
        boardState,
        handleDraw,
        handlePlayAgain,
        handleReset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("App context used outside App Provider");
  return context;
}

export { useApp, AppProvider };
