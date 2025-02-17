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
    removeItemFromCart(state, action) {
      const itemId = action.payload.id;
      const extistingCartItem = state.items.find((item) => item.id === itemId);
      if (extistingCartItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        extistingCartItem.quantity--;
        extistingCartItem.totalPrice -= extistingCartItem.price;
      }
    },
    // clearCart() {},
  },
});

export const { addItemToCart,removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
