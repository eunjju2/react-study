"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* eslint-disable default-case */
var reducer = function reducer(state, action) {
  //state : 상태값
  //action : 어떻게 바꿀 것인지
  switch (action.type) {
    case '빙수':
    case '당고':
    case '케이크':
    case '푸딩':
      // return state + action.price; //state = total
      return [].concat(_toConsumableArray(state), [{
        name: action.type,
        price: action.price
      }]);
  }
};

var _default = reducer;
exports["default"] = _default;