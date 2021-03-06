import { html } from 'https://cdn.skypack.dev/lit-html';

import './features/counter/Counter.js';

const App = () => html`

  <link rel="stylesheet" href="App.css">

  <div class="App">
    <header class="App-header">

      <section class="App-logo">
        <img src="polymer-logo.svg" class="App-Polymer-logo" alt="Polymer logo" />
        <img src="redux-logo.svg" class="App-Redux-logo" alt="Redux logo" />
      </section>

      <counter-element></counter-element>

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <span>
        <span>Learn </span>
        <a
          class="App-link"
          href="https://lit-html.polymer-project.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          lit-html
        </a>
        <span>, </span>
        <a
          class="App-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
          ,<span> and </span>
        <a
          class="App-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
      </span>
    </header>
  </div>
`;

export default App;
