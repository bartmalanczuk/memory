const React = require('react');
const Obverse = require('./Obverse');
const Reverse = require('./Reverse');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Card extends React.Component {
  constructor() {
    super();
    this.state = {isFlipped: false};
    this.flip = this.flip.bind(this);
  }

  flip() {
    this.setState({isFlipped: !this.state.isFlipped});
  }

  render() {
    const side = (this.state.isFlipped ? <Reverse symbol={this.props.symbol} key="aoeu"/> : <Obverse key="ueoa"/>)
    return (
      <div className='col-md-2 card__container' onClick={this.flip}>
        <div className='card'>
          <ReactCSSTransitionGroup transitionName="flip" transitionEnterTimeout={500} transitionLeaveTimeout={250}>
            {side}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  symbol: React.PropTypes.string.isRequired
}

module.exports = Card;
