const React = require('react');
const Deck = require('./Deck');
const Card = require('./Card');
const Grid = require('./Grid');

class Board extends React.Component {
  render() {
    let deck = new Deck(this.props.size);

    return (
      <Grid deck={deck}/>
    );
  }
}

Board.propTypes = {
  size: React.PropTypes.number.isRequired
};


module.exports = Board;
