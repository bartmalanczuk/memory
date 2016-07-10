const React = require('react');

class Reverse extends React.Component {
  render() {
    return (
      <div className='card__reverse'>
        <span className={`card__reverse__symbol ${this.props.symbol}`}></span>
      </div>
    )
  }
}

Reverse.propTypes = {
  symbol: React.PropTypes.string.isRequired
}
module.exports = Reverse;
