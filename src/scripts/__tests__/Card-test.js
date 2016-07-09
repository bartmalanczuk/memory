jest.unmock('../Card');
const React = require('react');
const sd = require('skin-deep');

describe('Card', () => {
  it('has proper image', () => {
    const Card = require('../Card');
    const image = "apple";
    const tree = sd.shallowRender(<Card image={image}/>);
    expect(tree.subTree(`.card__reverse__image.${image}`)).toBeTruthy();
  });
});
