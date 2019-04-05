import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './App.css';
import Heart from './Heart';
import Diamond from './Diamond';
import Club from './Club';
import Spade from './Spade';

class App extends Component {
  getBoard() {
    let stocks = <div id="stocks" />;
    let waste = <div id="waste" />;
    let pile = <div className="foundationPiles" />;
    let piles = new Array(4).fill(pile);
    let foundation = <div id="foundation">{piles}</div>;

    let tableauPiles = <Heart className="tableauPiles" />;

    let tableau = <div id="tableau">{tableauPiles}</div>;
    let upperDivLeft = (
      <div id="upperDivLeft">
        {stocks}
        {waste}
      </div>
    );
    
    let upperDivRight = <div id="upperDivRight">{foundation}</div>;
    let upperDiv = (
      <div id="upperDiv">
        {upperDivLeft}
        {upperDivRight}
      </div>
    );
    let bottomDiv = <div id="bottomDiv">{tableau}</div>;
    return { upperDiv, bottomDiv };
  }

  render() {
    let { upperDiv, bottomDiv } = this.getBoard();

    return (
      <div id="Game-table">
        {upperDiv}
        {bottomDiv}
      </div>
    );
  }
}

export default App;
