import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Tile from './components/tile.js'
import ximg from './images/x.png';
import oimg from './images/o.png';

function App() {

  const [turn, setTurn] = useState()
  const [tileArray, setTileArray] = useState([null, null, null, null, null, null, null, null, null])

  useEffect(() => {
    switch(turn) {
      case 'X':
        document.getElementById("game-msg").innerHTML = "Player X's Turn"
        break;
      case 'O':
        document.getElementById("game-msg").innerHTML = "Player O's Turn"
        break;
    }
  })


  function tileClick(num) {
    // alert(num);

    if (turn === 'X' || turn === 'O') {
      tileArray[num] = turn;      
      document.getElementById(num).innerHTML = '<img class="xoimg" src="' + (turn === 'X' ? ximg : oimg) + '"/>'

      console.log(tileArray);
      let winner = checkMatch()
      console.log('winner', tileArray, winner);

      if(winner === null) {        
        setTurn(turn === 'X' ? 'O' : 'X');
      } else {
        setTurn(null);
        document.getElementById("game-msg").innerHTML = `Player ${winner} Wins`;
      }
    }
  }

  function startGame() {
    setTurn((Math.random * 100) > 50 ? 'X' : 'O');
  }

  function checkMatch() {

    console.log('HELLO CHECKMATCH TILEARRAY', tileArray);
    if (tileArray[0] === tileArray[1] && tileArray[1] === tileArray[2] && tileArray[0] !== null){
      return tileArray[0];
    } else if (tileArray[3] === tileArray[4] && tileArray[4] === tileArray[5] && tileArray[3] !== null){
      return tileArray[3]
    } else if (tileArray[6] === tileArray[7] && tileArray[7] === tileArray[8] && tileArray[6] !== null){
      return tileArray[6]
    } else if (tileArray[0] === tileArray[3] && tileArray[3] === tileArray[6] && tileArray[0] !== null){
      return tileArray[0]
    } else if (tileArray[1] === tileArray[4] && tileArray[4] === tileArray[7] && tileArray[1] !== null){
      return tileArray[1]
    } else if (tileArray[2] === tileArray[5] && tileArray[5] === tileArray[8] && tileArray[2] !== null){
      return tileArray[2]
    } else if (tileArray[2] === tileArray[4] && tileArray[4] === tileArray[6] && tileArray[2] !== null){
      return tileArray[2]
    } else if (tileArray[0] === tileArray[4] && tileArray[4] === tileArray[8] && tileArray[0] !== null){
      return tileArray[0];
    } else {
      return null;
    }
  }


  return (
    <div className="App">
      <p id="game-msg">Please start new game</p>
      <table className="grid-table">
        <tr className="grid-row">
          <td className="grid-col"><Tile num="0" click={tileClick}/></td>
          <td className="grid-col"><Tile num="1" click={tileClick}/></td>
          <td className="grid-col"><Tile num="2" click={tileClick}/></td>
        </tr>
        <tr>
          <td className="grid-col"><Tile num="3" click={tileClick}/></td>
          <td className="grid-col"><Tile num="4" click={tileClick}/></td>
          <td className="grid-col"><Tile num="5" click={tileClick}/></td>
        </tr>
        <tr>
          <td className="grid-col"><Tile num="6" click={tileClick}/></td>
          <td className="grid-col"><Tile num="7" click={tileClick}/></td>
          <td className="grid-col"><Tile num="8" click={tileClick}/></td>
        </tr>
      </table>
      <button onClick={startGame}>Start</button>
    </div>
  );
}

export default App;
