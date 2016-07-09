const React = require('react');
const ReactDOM = require('react-dom');
const Board = require('./Board');

ReactDOM.render(<Board size={12}/>, document.getElementById('memory'));
