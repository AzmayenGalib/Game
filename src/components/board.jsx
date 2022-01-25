import Block from "./block";
import { useState, useEffect } from "react";

export default function Board() {
  const [marks, setMark] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player, setPlayer] = useState(1);

  useEffect(() => {
    const combinition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let c of combinition) {
      if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
        alert("Player1 has won");
        window.location.reload();
      }
      if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
        alert("Player2 has won");
        window.location.reload();
      }
    }
  });

  const changemark = (i) => {
    const m = [...marks];
    if (m[i] === 0) {
      m[i] = player;
      setMark(m);
      setPlayer(player == 1 ? 2 : 1);
    } else {
      alert("Pleas click  on empty block");
    }
  };

  const restart = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="head">Enjoy</div>
      <div className="Board">
        <Block mark={marks[0]} position={0} changemark={changemark}></Block>
        <Block mark={marks[1]} position={1} changemark={changemark}></Block>
        <Block mark={marks[2]} position={2} changemark={changemark}></Block>

        <Block mark={marks[3]} position={3} changemark={changemark}></Block>
        <Block mark={marks[4]} position={4} changemark={changemark}></Block>
        <Block mark={marks[5]} position={5} changemark={changemark}></Block>

        <Block mark={marks[6]} position={6} changemark={changemark}></Block>
        <Block mark={marks[7]} position={7} changemark={changemark}></Block>
        <Block mark={marks[8]} position={8} changemark={changemark}></Block>
      </div>
      <div className="btncon">
        <input
          className="btn"
          type="submit"
          value="Start a new game"
          onClick={restart}
        ></input>
      </div>
      <div className="warn">Circle = Player1</div>
      <div className="warn">Cross = Player2</div>
    </>
  );
}
