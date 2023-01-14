import React from 'react';
import { atom, selectorFamily } from 'recoil';

const cartState = atom({
  key: 'cartState',
  default: new Map(),
});

export const cartItemSelector = selectorFamily<number, string>({
  key: 'cartItem',
  get:
    (id) =>
    ({ get }) => {
      const carts = get(cartState);
      return carts.get(id);
    },
  set:
    (id) =>
    ({ get, set }, newValue) => {
      if (typeof newValue === 'number') {
        const newCart = new Map([...get(cartState)]);
        newCart.set(id, newValue);
        set(cartState, newCart);
      }
    },
});

export default cartState;
