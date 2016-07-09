const React = require('react');
const Card = require('./Card');
const Deck = require('./Deck');


class Grid extends React.Component {
  render() {
    return (
      <div className="board">
        <div className="row">
          {
            this.props.deck.cardsInGame().map((symbol, index) => (
              <Card image={symbol} key={index}/>
            ))
          }
        </div>
      </div>
    );
  }
};

Grid.propTypes = {
  deck: React.PropTypes.instanceOf(Deck).isRequired
};

module.exports = Grid;
