class Deck {
  constructor(size) {
    this._symbolsInGame = this.constructor.availableSymbols
      .sort(() => ( 0.5 - Math.random()))
      .slice(0, size);

  }

  symbolsInGame() {
    return this._symbolsInGame;
  }

  cardsInGame() {
    return this.symbolsInGame().concat(this.symbolsInGame())
      .sort(() => ( 0.5 - Math.random()));
  }
};

Deck.availableSymbols = [
  'monkey',
  'angel',
  'elephant',
  'apple',
  'pear',
  'robot',
  'alien',
  'shell',
  'ball',
  'car',
  'anchor',
  'telephone',
  'heart'
];

module.exports = Deck;
