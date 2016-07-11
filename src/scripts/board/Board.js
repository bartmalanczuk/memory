const React = require('react');
const Card = require('../card/Card');

class Board extends React.Component {
  constructor(props) {
    super();

    this._symbolsInGame = this.constructor.availableSymbols
      .sort(() => ( 0.5 - Math.random()))
      .slice(0, props.size);

  }

  symbolsInGame() {
    return this._symbolsInGame;
  }

  cardsInGame() {
    return this.symbolsInGame().concat(this.symbolsInGame())
      .sort(() => ( 0.5 - Math.random()));
  }

  render() {
    return (
      <div className="board">
        <div className="row">
          {
            this.cardsInGame().map((symbol, index) => (
              <Card symbol={symbol} key={index}/>
            ))
          }
        </div>
      </div>
    );
  }
};

Board.availableSymbols = [
  'monkey',
  'angel',
  'elephant',
  'apple',
  'pear',
  'robot',
  'alien',
  'shell',
  'ball',
  'car',
  'anchor',
  'telephone',
  'heart'
];

Board.propTypes = {
  size: React.PropTypes.number.isRequired
};

module.exports = Board;
