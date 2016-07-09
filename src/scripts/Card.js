const React = require('react');

class Card extends React.Component {
  render() {
    return (
      <div className='col-md-2 card__container'>
        <div className='card'>
          <div className='card__obverse'>
            <div className='card__obverse__pattern'></div>
          </div>
          <div className='card__reverse'>
            <span className={`card__reverse__image ${this.props.image}`}></span>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  image: React.PropTypes.string.isRequired
}

module.exports = Card;
