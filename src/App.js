import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Tile from './components/tile.js'
import ximg from './images/x.png';
import oimg from './images/o.png';

function App() {

  const [turn, setTurn] = useState('X')
  const [tileArray, setTileArray] = useState([null, null, null, null, null, null, null, null, null])


  function tileClick(num) {
    // alert(num);
    document.getElementById(num).innerHTML = '<img class="xoimg" src="' + (turn === 'X' ? ximg : oimg) + '"/>'

    setTurn(turn === 'X' ? 'O' : 'X');
  }


  return (
    <div className="App">
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
      <button>Start</button>
    </div>
  );
}

export default App;
