jest.unmock('../Grid');
const React = require('react');
const sd = require('skin-deep');
const Grid = require('../Grid');
const Card = require('../Card');
const Deck = require('../Deck')
let deck, tree;

describe("Grid", () => {
  beforeEach(() => {
    deck = new Deck(12);
    tree = sd.shallowRender(<Grid deck={deck}/>);
  });

  it("renders cards", () => {
    expect(tree.everySubTree('Card').length).toBeTruthy()
  });
})
