import { createSlice } from "@reduxjs/toolkit";
import { showNotification } from "./ui-slice";

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
    // clearCart() {},
  },
});

export const sendCartData = async (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://fir-practice-9c832-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        showNotification({
          status: "success",
          title: "Success...",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error...",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
