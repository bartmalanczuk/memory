jest.unmock('../Board');
const React = require('react');
const sd = require('skin-deep');
const Board = require('../Board');

describe("Board", () => {
  describe("rendering", () => {
    let tree, board;
    beforeEach(() => {
      board = <Board size={12}/>;
      tree = sd.shallowRender(board);
    });

    it("renders cards", () => {
      expect(tree.everySubTree('Card').length).toBeTruthy()
    });
  });

  describe('methods', () => {
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
      let mockedSymbols;
      beforeEach(() => {
        mockedSymbols = ['apple', 'angel', 'elephant', 'car'];
        spyOn(board, 'symbolsInGame').and.returnValue(mockedSymbols);
      });

      it('returns pairs cards with property symbol from symborlsInGame', () => {
        board.symbolsInGame().forEach((symbol) => {
          expect(board.cardsInGame().filter((card) => {
            return card.symbol === symbol;
          }).length).toEqual(2);
        });
      });

      it('returns cards which have unique key', () => {
        let keys = [];
        board.cardsInGame().forEach((card) => {
          expect(keys).not.toContain(card.key);
          keys.push(card.key);
        });
      });
    });

    describe('onCardClick', () => {
      let card1, card2, card3;
      beforeEach(() => {
        jasmine.clock().uninstall();
        jasmine.clock().install();
        card1 = jasmine.createSpyObj('card1', ['flip', 'symbol', 'hide']);
        card2 = jasmine.createSpyObj('card2', ['flip', 'symbol', 'hide']);
        card3 = jasmine.createSpyObj('card3', ['flip', 'symbol', 'hide']);
      });

      afterEach(() => {
        jasmine.clock().uninstall();
      });

      describe('called once', () => {
        it('calls card flip', () => {
          board.onCardClick(card1);
          expect(card1.flip).toHaveBeenCalledTimes(1);
        });
      });

      describe("when symbols on cards are different", () => {
        beforeEach(() => {
          card1.symbol.and.returnValue("apple");
          card2.symbol.and.returnValue("pear");
          card3.symbol.and.returnValue("snake");
        });

        describe('called twice', () => {
          it('calls flip twice on each card', () => {
            board.onCardClick(card1);
            board.onCardClick(card2);
            jasmine.clock().tick(500);
            expect(card1.flip).toHaveBeenCalledTimes(2);
            expect(card2.flip).toHaveBeenCalledTimes(2);
          });
        });

        describe('called three times', () => {
          it('does no flip third card', () => {
            board.onCardClick(card1);
            board.onCardClick(card2);
            board.onCardClick(card3);
            expect(card3.flip).not.toHaveBeenCalled();
          });
        });
      });

      describe('when symbols on cards are the same', () => {
        beforeEach(() => {
          card1.symbol.and.returnValue('apple');
          card2.symbol.and.returnValue('apple');
        });

        describe('called with both of cards', () => {
          beforeEach(() => {
            board.onCardClick(card1);
            board.onCardClick(card2);
            jasmine.clock().tick(500);
          });

          it('calls on them hide()', () => {
            expect(card1.hide).toHaveBeenCalledTimes(1);
            expect(card2.hide).toHaveBeenCalledTimes(1);
          });
        });
      });
    });
  });
})
