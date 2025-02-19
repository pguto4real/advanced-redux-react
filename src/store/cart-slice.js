import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], cartTotal: 0, totalPrice: 0, changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalPrice = action.payload.totalPrice;
      state.cartTotal = action.payload.cartTotal;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload.item;
      const extistingCartItem = state.items.find(
        (item) => item.id === newItem.id
      );
      state.changed=true
      if (!extistingCartItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.cartTotal += 1;
      
      } else {
        extistingCartItem.quantity++;
        extistingCartItem.totalPrice += newItem.price;
      }
      state.totalPrice = state.items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price;
      }, 0);
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload.id;

      const extistingCartItem = state.items.find((item) => item.id === itemId);
      state.changed=true
      if (extistingCartItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
        state.cartTotal -= 1;
      } else {
        extistingCartItem.quantity--;
        extistingCartItem.totalPrice -= extistingCartItem.price;
      }
      state.totalPrice = state.items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price;
      }, 0);
    },
   
  },
});

export const { addItemToCart, removeItemFromCart, replaceCart } =
  cartSlice.actions;
export default cartSlice.reducer;
