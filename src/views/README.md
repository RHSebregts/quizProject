# Views

View functions are pure functions used to render JS data into DOM elements.
They take primitives, objects or arrays as arguments and they return Elements only.
Pages will use view functions to render program state and update the UI.

VIEW functions will _never_ ...

- read from the DOM
  - they will create _new_ DOM elements
- write to the DOM
  - they return a DOM element that the handler will append
- use events
- use prompt/alert/confirm
- use data that is not passed as a parameter
