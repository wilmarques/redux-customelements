import { html } from 'https://cdn.skypack.dev/lit-html';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice.js';
import store from '../../app/store.js';

const Counter = () => {

  const state = store.getState();
  const count = selectCount(state);
  const dispatch = store.dispatch;

  let incrementAmount = 2;
  const setIncrementAmount = (newValue) => {
    incrementAmount = newValue;
  };

  return html`

    <link rel="stylesheet" href="features/counter/Counter.module.css">

    <div>
      <div class="row">
        <button
          class="button"
          aria-label="Increment value"
          @click=${() => dispatch(increment())}
        >
          +
        </button>
        <span class="value">${count}</span>
        <button
          class="button"
          aria-label="Decrement value"
          @click=${() => dispatch(decrement()) }
        >
          -
        </button>
      </div>
      <div class="row">
        <input
          class="textbox"
          aria-label="Set increment amount"
          value=${incrementAmount}
          @change=${e => setIncrementAmount(e.target.value) }
        />
        <button
          class="button"
          @click=${() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          class="button asyncButton"
          @click=${() => dispatch(incrementAsync(Number(incrementAmount) || 0)) }
        >
          Add Async
        </button>
      </div>
    </div>
  `;
}

export default Counter;
