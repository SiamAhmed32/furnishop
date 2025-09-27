'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // {id, title, price, qty, image}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const found = state.items.find(i => i.id === payload.id);
      if (found) found.qty += payload.qty || 1;
      else state.items.push({ ...payload, qty: payload.qty || 1 });
    },
    removeFromCart(state, { payload }) {
      state.items = state.items.filter(i => i.id !== payload);
    },
    updateQty(state, { payload }) {
      const { id, qty } = payload;
      const item = state.items.find(i => i.id === id);
      if (item) item.qty = Math.max(1, qty);
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
