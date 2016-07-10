jest.unmock('../Card');
const React = require('react');
const sd = require('skin-deep');
const Card = require('../Card');
let tree, symbol;

const showsObverse = () => {
  it('renders Obverse', () => {
    expect(tree.subTree('Obverse')).toBeTruthy();
  });

  it('does not render Reverse', () => {
    expect(tree.subTree('Reverse')).toBeFalsy();
  });
}

const showsReverse = () => {
  it('renders Reverse', () => {
    expect(tree.subTree('Reverse')).toBeTruthy();
  });

  describe('Reverse component', () => {
    it('has passed symbol field', () => {
      expect(tree.subTree('Reverse').props.symbol).toEqual(symbol);
    });
  });

  it('does not render Obverse', () => {
    expect(tree.subTree('Obverse')).toBeFalsy();
  });
}

describe('Card', () => {
  beforeEach(() => {
    symbol = "apple";
    tree = sd.shallowRender(<Card symbol={symbol}/>);
  });

  describe('after initialization', () => {
    showsObverse();
  });

  describe('after click', () => {
    beforeEach(() => {
      tree.props.onClick();
    });

    showsReverse();
  });

  describe('after double click', () => {
    beforeEach(() => {
      tree.props.onClick();
      tree.props.onClick();
    });

    showsObverse();
  });
});
