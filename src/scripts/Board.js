const React = require('react');
const Card = require('./Card');
const Deck = require('./Deck');


class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <div className="row">
          {
            this.props.deck.cardsInGame().map((symbol, index) => (
              <Card symbol={symbol} key={index}/>
            ))
          }
        </div>
      </div>
    );
  }
};

Board.propTypes = {
  deck: React.PropTypes.instanceOf(Deck).isRequired
};

module.exports = Board;
