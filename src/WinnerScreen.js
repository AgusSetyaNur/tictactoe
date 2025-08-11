import { useApp } from "./AppContext";

function WinnerScreen() {
  const { winner } = useApp();
  const draw = winner === "draw";
  return (
    <h2 className="winner-text">
      {draw ? "🫱🏼‍🫲🏻 Its a draw! 🫱🏼‍🫲🏻" : `🎉 ${winner} win 🎉`}
    </h2>
  );
}

export default WinnerScreen;
