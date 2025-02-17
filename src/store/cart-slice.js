import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], cartTotal: 0, totalPrice: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload.item;
      const extistingCartItem = state.items.find(
        (item) => item.id === newItem.id
      );
      if (!extistingCartItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        extistingCartItem.quantity++;
        extistingCartItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart() {
      const itemId = action.payload.id;
      const extistingCartItem = state.items.find((item) => item.id === itemId);
    },
    clearCart() {},
  },
});

export const { toggle } = uiSlice.actions;
export default uiSlice.reducer;
