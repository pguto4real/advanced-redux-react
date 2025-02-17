import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], cartTotal: 0, totalPrice: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart() {},
  },
});

export const { toggle } = uiSlice.actions;
export default uiSlice.reducer;
