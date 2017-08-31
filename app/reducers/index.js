import { combineReducers } from 'redux';

import board from '../reducers/board/';

const rootReducer = combineReducers({
  board,
});

export default rootReducer;
