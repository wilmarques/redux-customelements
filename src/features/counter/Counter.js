import { LitElement, html } from 'https://cdn.skypack.dev/lit-element';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice.js';
import store from '../../app/store.js';

import { counterStyles } from './Counter-styles.js';

export class CounterElement extends LitElement {

  constructor() {
    super();
    this.count = 0;
    this.incrementAmount = 2;
  }

  connectedCallback() {
    super.connectedCallback();
    this.subscribeToStoreChanges();
  }

  subscribeToStoreChanges() {
    store.subscribe((s) => this.updateCountValueFromStore());
  }

  updateCountValueFromStore() {
    const state = store.getState();
    this.count = selectCount(state);
    this.requestUpdate();
  }

  setIncrementAmount(newValue) {
    this.incrementAmount = newValue;
  }

  dispatch(action) {
    store.dispatch(action);
  }

  static get styles() {
    return counterStyles;
  }

  render() {
    return html`

      <div>
        <div class="row">
          <button
            class="button"
            aria-label="Increment value"
            @click=${() => this.dispatch(increment())}
          >
            +
          </button>
          <span class="value">${this.count}</span>
          <button
            class="button"
            aria-label="Decrement value"
            @click=${() => this.dispatch(decrement()) }
          >
            -
          </button>
        </div>
        <div class="row">
          <input
            class="textbox"
            aria-label="Set increment amount"
            value=${this.incrementAmount}
            @change=${e => this.setIncrementAmount(e.target.value) }
          />
          <button
            class="button"
            @click=${() =>
              this.dispatch(incrementByAmount(Number(this.incrementAmount) || 0))
            }
          >
            Add Amount
          </button>
          <button
            class="button asyncButton"
            @click=${() => this.dispatch(incrementAsync(Number(this.incrementAmount) || 0)) }
          >
            Add Async
          </button>
        </div>
      </div>
    `;
  }
}

window.customElements.define('counter-element', CounterElement);
