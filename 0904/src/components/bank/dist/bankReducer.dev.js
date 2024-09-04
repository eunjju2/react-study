"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'deposit':
      return state + action.money;

    case 'withdraw':
      return state - action.money;
  }
}

var _default = reducer;
exports["default"] = _default;