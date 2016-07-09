jest.unmock('../Board');
const React = require('react');
const sd = require('skin-deep');
const Board = require('../Board');
const Deck = require('../Deck');
const Grid = require('../Grid');
let board;

describe('Board', () => {
  beforeEach(() => {
    const size = 12;
  });

  it('renders Grid', () => {
    board = sd.shallowRender(<Board size={size}/>);
    expect(board.type).toEqual(Grid);
  });
});
