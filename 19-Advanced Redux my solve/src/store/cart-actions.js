import { cart } from "./ui-cart-slice";
import { cartItemAction } from "./cartItems-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-2660e-default-rtdb.europe-west1.firebasedatabase.app/order.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong !");
      }
      const data = await response.json();
      return data;
    };
    try {
      const fatchedData = await fetchData();
      dispatch(cartItemAction.replaceCart(fatchedData));
    } catch (error) {
      dispatch(
        cart.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed !",
        })
      );
    }
  };
};

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      cart.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-2660e-default-rtdb.europe-west1.firebasedatabase.app/order.json",
        {
          method: "PUT",

          body: JSON.stringify(cartData),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        cart.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cart.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed !",
        })
      );
    }
  };
};
