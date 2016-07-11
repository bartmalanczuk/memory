jest.unmock('../Board');
const React = require('react');
const sd = require('skin-deep');
const Board = require('../Board');

describe("Board", () => {
  describe("rendering", () => {
    let tree;
    beforeEach(() => {
      tree = sd.shallowRender(<Board size={12}/>);
    });

    it("renders cards", () => {
      expect(tree.everySubTree('Card').length).toBeTruthy()
    });
  });

  describe('local methods', () => {
    let board, size;

    beforeEach(() => {
      size = 5;
      board = new Board({size: length});
    });

    describe('symborlsInGame', () => {
      it('returns array of symbols', () => {
        board.symbolsInGame().forEach((card) => {
          expect(Board.availableSymbols).toContain(card);
        });
      });

      it('returns array of length specified by constructor', () => {
        expect(board.symbolsInGame().length).toEqual(length);
      });
    });

    describe('cardsInGame', () => {
      it('returns pairs of symborlsInGame', () => {
        const mockedSymbols = ['apple', 'angel', 'elephant', 'car'];
        spyOn(board, 'symbolsInGame').and.returnValue(mockedSymbols);
        board.symbolsInGame().forEach((symbol) => {
          expect(board.cardsInGame().filter((card) => {
            return card === symbol;
          }).length).toEqual(2);
        });
      });
    });
  });
})
