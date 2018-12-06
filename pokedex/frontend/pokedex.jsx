import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchAllPokemon, fetchOnePokemon } from './util/api_util';

window.fetchAllPokemon = fetchAllPokemon;
window.fetchOnePokemon = fetchOnePokemon;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, rootEl);
});
