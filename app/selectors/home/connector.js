import { createStructuredSelector } from 'reselect';

// Raw Selectors
const getBoard = state => state.board;

export default createStructuredSelector({
  board: getBoard,
});
