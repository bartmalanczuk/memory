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

const generate = function(width, height) {
    const availableSymbols = [
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
    const size = height * width;
    let usedSymbols = availableSymbols.sort(() => ( 0.5 - Math.random()))
      .slice(0, Math.floor(size/2));
    let symbolsForCards = usedSymbols.concat(usedSymbols)
      .sort(() => ( 0.5 - Math.random()));
    let cards = Array(height).fill([])
      .map((v, rowIdx) => (
        symbolsForCards
          .slice(rowIdx * width, (rowIdx+1) * width)
          .map((v, colIdx) => ({image: v, index: (width*rowIdx)+colIdx}))
      ));

    return cards;
}

module.exports = Deck;
