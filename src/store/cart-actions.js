import { replaceCart } from "./cart-slice";
import { showNotification } from "./ui-slice";
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fir-practice-9c832-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("failed to fetch cart data");
      }
      const responsedata = await response.json();
      return responsedata;
    };
    try {
      const cartData = await fetchData();
    
      if (cartData) {
        dispatch(replaceCart({
            cartTotal: cartData.cartTotal,
            items: cartData.items || [],
            totalPrice: cartData.totalPrice,
          }));
      }
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error...",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};
export const sendCartData = (cart) => {
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
          body: JSON.stringify({
            cartTotal: cart.cartTotal,
            items: cart.items,
            totalPrice: cart.totalPrice,
          }),
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
