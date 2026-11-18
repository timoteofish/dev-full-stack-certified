const { useState } = React;

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  const winningLine = lines.find(([a,b,c]) => squares[a] && squares[a] === squares[b] && squares[a] === squares[c]);
  const winner = winningLine ? squares[winningLine[0]] : null;
  const draw = !winner && squares.every(Boolean);
  function play(index) {
    if (squares[index] || winner || draw) return;
    const next = [...squares];
    next[index] = xIsNext ? "X" : "O";
    setSquares(next);
    setXIsNext(!xIsNext);
  }
  function reset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }
  return (
    <main className="game">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; min-height: 100vh; padding: 24px 16px; display: grid; place-items: center; background: #111419; color: #f0f2f8; font-family: system-ui, sans-serif; }
        .game { width: 100%; max-width: 400px; text-align: center; }
        .eyebrow { font-size: 11px; letter-spacing: 4px; color: #b3a1f8; font-weight: 700; }
        h1 { font-size: clamp(28px, 7vw, 42px); letter-spacing: -2px; margin: 12px 0; }
        .subtitle { color: #a6adbd; font-size: 14px; }
        .status { margin: 28px 0 20px; padding: 12px; border: 1px solid #393c4b; border-radius: 12px; font-weight: 600; background: #1d212a; }
        .board { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr); gap: 10px; }
        .square { width: 100%; aspect-ratio: 1; border: 1px solid #363b48; border-radius: 16px; background: #202630; color: #b9a6ff; font: 700 clamp(32px, 10vw, 56px) system-ui, sans-serif; cursor: pointer; }
        .square:hover { background: #2d3442; }
        .square[data-player="O"] { color: #8de3ca; }
        .square.winning { background: #353052; border-color: #b9a6ff; }
        button:focus-visible { outline: 3px solid #f7d88b; outline-offset: 3px; }
        #reset { margin-top: 24px; width: 100%; padding: 15px; border: 0; border-radius: 12px; background: #c0adff; color: #201936; font: 700 15px system-ui, sans-serif; cursor: pointer; }
        #reset:hover { background: #d5c9ff; }
        .footer { color: #838d9f; font-size: 12px; margin-top: 20px; }
      `}</style>
      <div className="eyebrow">THE CLASSIC DUEL</div>
      <h1>Tic-Tac-Toe</h1>
      <p className="subtitle">Two players. Three in a row. Your move.</p>
      <p className="status" role="status" aria-live="polite">{winner ? "Winner: " + winner : draw ? "Draw!" : "Next player: " + (xIsNext ? "X" : "O")}</p>
      <div className="board">
        {squares.map((value, index) => (
          <button key={index} type="button" className={"square" + (winningLine?.includes(index) ? " winning" : "")} data-player={value || ""} aria-label={"Square " + (index + 1) + (value ? ": " + value : ": empty")} onClick={() => play(index)}>{value}</button>
        ))}
      </div>
      <button id="reset" type="button" onClick={reset}>Restart game</button>
      <p className="footer">X starts · Take turns · Make your line</p>
    </main>
  );
}