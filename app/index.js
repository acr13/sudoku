import React from 'react';
import { Provider } from 'react-redux';

import Home from './containers/home';
import configureStore from './store/index';

const store = configureStore();

const Sudoku = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default Sudoku;
