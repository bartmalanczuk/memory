jest.unmock('../Reverse');
const React = require('react');
const Reverse = require('../Reverse');
const sd = require('skin-deep');
let tree, symbol;

describe('Reverse', () => {
  beforeEach(() => {
    symbol = 'apple';
    tree = sd.shallowRender(<Reverse symbol={symbol}/>);
  });

  it('renders element with className based on symbol property', () => {
    expect(tree.subTree(`.card__reverse__symbol.${symbol}`)).toBeTruthy();
  });
});
