import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';

function saveToLocalStorage(state) {
  try {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  } catch (e) {}
}

function loadFromLocalStorage() {
  try {
    const data = localStorage.getItem('cart');
    return data ? { cart: JSON.parse(data) } : undefined;
  } catch (e) {
    return undefined;
  }
}

export const store = configureStore({
  reducer: { cart },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));
