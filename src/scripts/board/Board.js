const React = require('react');
const Card = require('../card/Card');

class Board extends React.Component {
  constructor(props) {
    super();
    this._size = props.size;
    this._symbolsInGame = this.symbolsInGame();
    this._cards = this.cardsInGame();
    this._currentPair = [];
    this._animationInProgress = false;
    this.onCardClick = this.onCardClick.bind(this);
  }

  symbolsInGame() {
    return this.constructor.availableSymbols
      .sort(() => ( 0.5 - Math.random()))
      .slice(0, this._size);
  }

  cardsInGame() {
    const choosenSymbols = this.symbolsInGame();
    return choosenSymbols.concat(choosenSymbols)
      .sort(() => ( 0.5 - Math.random()))
      .map((symbol, key) => ({symbol: symbol, key: key}));
  }

  onCardClick(card) {
    if(this._animationInProgress) return;
    this._currentPair.push(card);
    card.flip();
    if(this._currentPair.length === 2) {
      this._animationInProgress = true;
      setTimeout(() => {
        if(this._currentPair[0].symbol() === this._currentPair[1].symbol()) {
          this._currentPair[0].hide();
          this._currentPair[1].hide();
        }
        else {
          this._currentPair[0].flip();
          this._currentPair[1].flip();
        }
        this._currentPair = [];
        this._animationInProgress = false;
      }, Card.animationDuration)
    }
  }

  render() {
    return (
      <div className="board">
        <div className="row">
            {
              this._cards.map((card) => (
                <div className='col-md-2 card__container' key={card.key}>
                  <Card {...card} onCardClick={this.onCardClick}/>
                </div>
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
