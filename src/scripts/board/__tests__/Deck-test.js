jest.unmock('../Deck');
const Deck = require('../Deck');

describe('Deck', () => {
  describe('symborlsInGame', () => {
    it('returns array of symbols', () => {
      const deck = new Deck(4);
      deck.symbolsInGame().forEach((card) => {
        expect(Deck.availableSymbols).toContain(card);
      });
    });

    it('returns array of length specified by constructor', () => {
      const length = 5;
      const deck = new Deck(length);
      expect(deck.symbolsInGame().length).toEqual(length);
    });
  });

  describe('cardsInGame', () => {
    it('returns pairs of symborlsInGame', () => {
      const deck = new Deck(4);
      const mockedSymbols = ['apple', 'angel', 'elephant', 'car'];
      spyOn(deck, 'symbolsInGame').and.returnValue(mockedSymbols);
      deck.symbolsInGame().forEach((symbol) => {
        expect(deck.cardsInGame().filter((card) => {
          return card === symbol;
        }).length).toEqual(2);
      });
    });
  })
});
