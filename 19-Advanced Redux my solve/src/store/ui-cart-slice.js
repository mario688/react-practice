import { createSlice } from "@reduxjs/toolkit";

const cartState = {
  showCart: false,
  Notification: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    TOGGLECART(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.Notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const cart = cartSlice.actions;
export default cartSlice;
