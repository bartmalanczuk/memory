const React = require('react');
const ReactDOM = require('react-dom');
const Board = require('./Board');
const Deck = require('./Deck');

const deck = new Deck(12);
ReactDOM.render(<Board deck={deck}/>, document.getElementById('memory'));
