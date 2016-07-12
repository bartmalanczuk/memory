jest.unmock('../Card');
const React = require('react');
const sd = require('skin-deep');
const Card = require('../Card');


describe('Card', () => {
  describe('rendering', () => {
    let tree, key, symbol, card, onCardClick;
    beforeEach(() => {
      symbol = "apple";
      onCardClick= jasmine.createSpy();
      card = <Card symbol={symbol} onCardClick={onCardClick} />
      tree = sd.shallowRender(card);
    });

    describe('onClick', () => {
      beforeEach(() => {
        tree.props.onClick();
      });

      it('calls props.onCardClick', () => {
        expect(onCardClick).toHaveBeenCalled();
      });
    });
  });

  describe('methods', () => {
    let card, onCardClick, symbol;
    beforeEach(() => {
      onCardClick = jasmine.createSpy();
      symbol = "apple"
      card = new Card({onCardClick: onCardClick, symbol: symbol}); 
    });

    describe('flip', () => {
      it('changes state.isFlipped from true to false', () => {
        spyOn(card, 'setState');
        card.state.isFlipped = true;
        card.flip();
        expect(card.setState).toHaveBeenCalledWith({isFlipped: false})
      });

      it('changes state.isFlipped from false to true', () => {
        spyOn(card, 'setState');
        card.state.isFlipped = false;
        card.flip();
        expect(card.setState).toHaveBeenCalledWith({isFlipped: true})
      });
    });

    describe('hide', () => {
      it('changes state.isHidden from false to true', () => {
        spyOn(card, 'setState');
        card.state.isHidden = false;
        card.hide();
        expect(card.setState).toHaveBeenCalledWith({isHidden: true});
      });
    });
  });
});
