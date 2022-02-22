import { configureStore } from "../../../18.1-Redux-project/node_modules/@reduxjs/toolkit/dist";

import cartSlice from "./ui-cart-slice";
import cartItemsArraySlice from "./cartItems-slice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    itemCart: cartItemsArraySlice.reducer,
  },
});

export default store;
