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

  symbol() {
    return this.props.symbol;
  }

  hide() {
    this.setState({isHidden: true});
  }

  render() {
    let side;
    if(this.state.isHidden) {
      side = <div></div>;
    }
    else if(this.state.isFlipped) {
      side = <Reverse symbol={this.props.symbol} key="reverse"/>;
    }
    else {
      side = <Obverse key="obverse"/>;
    }
    return (
        <div className='card' onClick={() => { this.props.onCardClick(this) }}>
          <ReactCSSTransitionGroup transitionName="flip" transitionEnterTimeout={Card.animationDuration} transitionLeaveTimeout={Card.animationDuration/2}>
            {side}
          </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Card.animationDuration = 500;

Card.propTypes = {
  symbol: React.PropTypes.string.isRequired,
  onCardClick: React.PropTypes.func.isRequired
}

module.exports = Card;
