jest.unmock('../Board');
const React = require('react');
const sd = require('skin-deep');
const Deck = require('../Deck');
const Board = require('../Board');
let deck, tree;

describe("Board", () => {
  beforeEach(() => {
    deck = new Deck(12);
    tree = sd.shallowRender(<Board deck={deck}/>);
  });

  it("renders cards", () => {
    expect(tree.everySubTree('Card').length).toBeTruthy()
  });
})
