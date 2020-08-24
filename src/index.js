import { render } from 'https://cdn.skypack.dev/lit-html';

import App from './App.js';
import store from '../../app/store.js';

const renderApp = () => {
  render(App(), document.getElementById('root'));
};

renderApp();

store.subscribe((s) => renderApp());
